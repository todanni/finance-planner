import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import { Category } from '@prisma/client';

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
});
