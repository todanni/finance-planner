/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import { Category } from '@prisma/client';
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

	outstandingBalance: protectedProcedure
		.input(
			z.object({
				balanceId: z.number(),
				endDate: z.date(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					balanceId: input.balanceId,
					createdAt: {
						lte: input.endDate,
					},
				},
				_sum: {
					amount: true,
				},
			});
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

			let end = DateTime.fromJSDate(balance.startDate!);
			let start = DateTime.fromJSDate(balance?.startDate!);
			let daysSinceStart = end.diff(start, 'days').days;
			let startingBalance = initialBalance.amount;
			let interstAdded = 0;

			payments.forEach((payment) => {
				// repeat until no payments left with date < endDate
				if (start < DateTime.fromJSDate(input.endDate)) {
					// Calculate how many days since the start date of the balance
					end = DateTime.fromJSDate(payment.createdAt);
					daysSinceStart = end.diff(start, 'days').days;
					// Calculate the interest added in that time
					interstAdded =
						(balance.interestRate / 36500) * daysSinceStart * startingBalance;
					startingBalance = startingBalance + interstAdded;
					// Subtract the payment from the balance
					startingBalance = startingBalance - payment.amount;
					// Set new start date to the payment date
					start = DateTime.fromJSDate(payment.createdAt);
				}
			});

			// if last payment date < endDate, and there are no payments left
			// add interest
			if (start < DateTime.fromJSDate(input.endDate)) {
				end = DateTime.fromJSDate(input.endDate);
				daysSinceStart = end.diff(start, 'days').days;
				interstAdded = (balance.interestRate / 36500) * daysSinceStart;
				startingBalance = startingBalance + interstAdded;
			}

			return startingBalance;
		}),
});
