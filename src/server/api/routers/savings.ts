import { Category, type Transaction } from '@prisma/client';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import { DateTime } from 'luxon';

export const savingsRouter = createTRPCRouter({
	estimateTotalBalance: protectedProcedure.query(async ({ ctx }) => {
		const balances = await ctx.prisma.balance.findMany({
			where: {
				userId: ctx.session?.user.id,
				subCategory: {
					category: Category.SAVINGS,
				},
			},
			include: {
				subCategory: true,
				transactions: true,
			},
		});
		const result = {
			totalBalance: 0,
			hasErrors: false,
			errors: [''],
		};

		if (!balances) {
			return {
				totalBalance: 0,
				hasErrors: true,
				errors: ['No balances found'],
			};
		}

		balances.forEach((balance) => {
			if (balance.transactions.length === 0) {
				result.hasErrors = true;
				result.errors.push(`No transactions found for ${balance.name}`);
				return;
			}
			if (!balance.transactions[0]?.isInitialBalance) {
				result.hasErrors = true;
				result.errors.push(`No initial balance found for ${balance.name}`);
				return;
			}

			const estimate = estimateBalance({
				interestRate: balance.interestRate,
				currentDate: new Date(),
				initialTransaction: balance.transactions[0],
				payments: balance.transactions.slice(1),
			});

			if (!estimate.isError) {
				result.errors.push(`Error calculating balance for ${balance.name}`);
				result.totalBalance += estimate.estimatedBalance;
			}
		});
		result.errors.pop();
		return result;
	}),
});

type BalanceEstimateInputs = {
	interestRate: number;
	currentDate: Date;
	initialTransaction: Transaction | undefined; // initial balance amount and start date
	payments: Transaction[]; // subsequent payments to the balance
};

const estimateBalance = ({
	interestRate,
	currentDate,
	initialTransaction,
	payments,
}: BalanceEstimateInputs) => {
	if (!initialTransaction) {
		return { estimatedBalance: 0, isError: true };
	}

	const dailyInterest = interestRate / 36500;
	let startDate = DateTime.fromJSDate(initialTransaction.createdAt);
	let endDate = DateTime.now();
	let estimatedBalance = initialTransaction.amount;

	payments.forEach((payment) => {
		if (startDate.toJSDate() < currentDate) {
			// Calculate number of days between payments
			endDate = DateTime.fromJSDate(payment.createdAt);
			const daysSince = endDate.diff(startDate, 'days').days;

			// Calculate interest and add to balance
			const interestAdded = estimatedBalance * dailyInterest * daysSince;
			estimatedBalance += interestAdded;

			// Add payment to balance
			estimatedBalance += payment.amount;

			// Set start date to current payment
			startDate = DateTime.fromJSDate(payment.createdAt);
		}
	});

	if (startDate.toJSDate() < currentDate) {
		endDate = DateTime.fromJSDate(currentDate);
		const daysSince = endDate.diff(startDate, 'days').days;

		// Calculate interest and add to balance
		const interestAdded = estimatedBalance * dailyInterest * daysSince;
		estimatedBalance += interestAdded;
	}

	return { estimatedBalance: estimatedBalance, isError: false };
};
