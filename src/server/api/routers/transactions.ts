import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { type SpendingPayments, type Totals } from '~/types/Totals';

export const transactionsRouter = createTRPCRouter({
	list: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.findMany({
				where: {
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				include: {
					subCategory: true,
				},
			});
		}),

	count: protectedProcedure.query(({ ctx }) => {
		return ctx.prisma.transaction.count({
			where: {
				userId: ctx.session?.user.id,
			},
		});
	}),

	listByCategory: protectedProcedure
		.input(
			z.object({
				category: z.nativeEnum(Category),
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.findMany({
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: input.category,
					},
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				include: {
					subCategory: true,
				},
			});
		}),

	listForSpending: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const result = await ctx.prisma.transaction.findMany({
				where: {
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
					subCategory: {
						category: {
							in: [
								Category.BILL,
								Category.LIVING_COSTS,
								Category.DISCRETIONARY,
							],
						},
					},
				},
				include: {
					subCategory: true,
				},
			});
			const payments: SpendingPayments = {
				bills: [],
				lc: [],
				discr: [],
			};

			result.forEach((transaction) => {
				switch (transaction.subCategory.category) {
					case Category.BILL:
						payments.bills.push(transaction);
						break;
					case Category.LIVING_COSTS:
						payments.lc.push(transaction);
						break;
					case Category.DISCRETIONARY:
						payments.discr.push(transaction);
						break;
				}
			});

			return payments;
		}),

	totalForCategory: protectedProcedure
		.input(
			z.object({
				category: z.nativeEnum(Category),
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: input.category,
					},
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				_sum: {
					amount: true,
				},
			});
		}),

	totalPerCategory: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const result = await ctx.prisma.transaction.findMany({
				where: {
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				include: {
					subCategory: true,
				},
			});

			const totals: Totals = {
				INCOME: 0,
				BILL: 0,
				LIVING_COSTS: 0,
				DISCRETIONARY: 0,
				DEBT: 0,
				SAVINGS: 0,
				TAX: 0,
				SPENDING: 0,
				hasResults: false,
			};

			if (result.length === 0) {
				return totals;
			}

			// Add up all the amounts for each category
			result.forEach((transaction) => {
				totals[transaction.subCategory.category] += transaction.amount;
			});

			totals.SPENDING =
				totals.BILL + totals.DISCRETIONARY + totals.LIVING_COSTS;

			totals.hasResults = true;

			return totals;
		}),

	create: protectedProcedure
		.input(
			z.object({
				amount: z.number(),
				name: z.string(),
				subCategoryId: z.number(),
				userId: z.string().default(''),
				balanceId: z.number().optional(),
				createdAt: z.date().optional(),
			}),
		)
		.mutation(({ ctx, input }) => {
			input.userId = ctx.session?.user.id;
			return ctx.prisma.transaction.create({
				data: input,
			});
		}),

	delete: protectedProcedure
		.input(
			z.object({
				id: z.number(),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.prisma.transaction.deleteMany({
				where: {
					id: input.id,
				},
			});
		}),

	deleteAll: protectedProcedure.mutation(({ ctx }) => {
		return ctx.prisma.transaction.deleteMany({
			where: {
				userId: ctx.session?.user.id,
			},
		});
	}),

	deleteForDateRange: protectedProcedure
		.input(
			z.object({
				id: z.number(),
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.prisma.transaction.deleteMany({
				where: {
					id: input.id,
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
			});
		}),
});

export const currentMonth = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	return {
		startDate: firstDay,
		endDate: lastDay,
	};
};
