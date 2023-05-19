/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import { type Balance, Category, type Transaction } from '@prisma/client';
import { DateTime } from 'luxon';
import { TRPCError } from '@trpc/server';

export const balanceRouter = createTRPCRouter({
	// List all balances for user
	list: protectedProcedure
		// .input(
		// 	z.object({
		// 		startDate: z.date(),
		// 		endDate: z.date(),
		// 	}),
		// )
		.query(({ ctx }) => {
			return ctx.prisma.balance.findMany({
				where: {
					userId: ctx.session?.user.id,
				},
				include: {
					subCategory: true,
				},
			});
		}),

	listByCategory: protectedProcedure
		.input(
			z.object({
				category: z.nativeEnum(Category),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.balance.findMany({
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: input.category,
					},
				},
				include: {
					subCategory: true,
				},
			});
		}),

	// Create a new balance
	create: protectedProcedure
		.input(
			z.object({
				balance: z.object({
					name: z.string(),
					subCategoryId: z.number(),
					userId: z.string().default(''),
					interestRate: z.number().default(0),
					startDate: z.date().optional(),
					endDate: z.date().optional(),
				}),

				// TODO: Create a transaction for the initial balance of negative amount
				amount: z.number().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			input.balance.userId = ctx.session?.user.id;
			const balance = await ctx.prisma.balance.create({
				data: input.balance,
			});

			if (input.amount !== undefined) {
				await ctx.prisma.transaction.create({
					data: {
						amount: input.amount,
						name: 'Initial Balance',
						subCategoryId: input.balance.subCategoryId,
						userId: ctx.session?.user.id,
						balanceId: balance.id,
						createdAt: input.balance.startDate,
					},
				});
			}

			return balance;
		}),

	estimatedBalance: protectedProcedure
		.input(
			z.object({
				balanceId: z.number(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const initialBalance = await ctx.prisma.transaction.findFirst({
				where: {
					userId: ctx.session?.user.id,
					balanceId: input.balanceId,
					isInitialBalance: true,
				},
			});

			if (!initialBalance) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Cannot estimate current balance.',
					cause: 'No initial balance found',
				});
			}

			// Get balance details - interest rate, start date
			const balance = await ctx.prisma.balance.findUnique({
				where: {
					id: input.balanceId,
				},
			});

			if (!balance) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Cannot estimate current balance.',
					cause: 'Balance not found',
				});
			}

			const payments = await ctx.prisma.transaction.findMany({
				where: {
					userId: ctx.session?.user.id,
					balanceId: input.balanceId,
					isInitialBalance: false,
				},
				orderBy: {
					createdAt: 'asc',
				},
			});

			const estimate = estimateBalance({
				...balance,
				initial: initialBalance.amount,
				currentDate: input.endDate,
				payments: payments,
			});

			return estimate;
		}),
});

type BalanceEstimateInputs = Balance & {
	initial: number;
	currentDate: Date;
	payments: Transaction[];
};

type BalanceEstimate = {
	totalPayments: number;
	totalInterest: number;
	estimate: number;
	error: boolean;
};

const estimateBalance = ({ ...balance }: BalanceEstimateInputs) => {
	let end = DateTime.now();
	let start = DateTime.fromJSDate(balance.startDate!);
	const dailyInterest = balance.interestRate / 36500;
	let totalPayments = 0;
	let totalInterest = 0;

	balance.payments.forEach((payment) => {
		if (balance.startDate! < balance.currentDate) {
			end = DateTime.fromJSDate(payment.createdAt);
			const daysSince = end.diff(start, 'days').days;

			// Calculate interest and add to balance
			const interestAdded = balance.initial * dailyInterest * daysSince;
			balance.initial += interestAdded;
			totalInterest += interestAdded;

			// Subtract payment from balance
			balance.initial -= payment.amount;
			totalPayments += payment.amount;

			start = DateTime.fromJSDate(payment.createdAt);
		}
	});

	if (start < DateTime.fromJSDate(balance.currentDate)) {
		end = DateTime.fromJSDate(balance.currentDate);
		const daysSince = end.diff(start, 'days').days;
		// const interstAdded = dailyInterest * daysSince;
		const interstAdded = dailyInterest * daysSince * balance.initial;
		balance.initial += +interstAdded;
	}

	// Fill the return object
	const estimate: BalanceEstimate = {
		estimate: balance.initial,
		totalPayments: totalPayments,
		totalInterest: totalInterest,
		error: false,
	};
	return estimate;
};
