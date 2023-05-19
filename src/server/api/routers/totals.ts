import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

export const totalsRouter = createTRPCRouter({
	income: protectedProcedure
		// Income payments, benefits, deductions
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const incomeTotal = await ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: Category.INCOME,
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

			const taxTotal = await ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: Category.TAX,
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

			const totals = {
				income: incomeTotal._sum.amount,
				deductions: taxTotal._sum.amount,
				benefits: 0,
			};

			return totals;
		}),
	savings: protectedProcedure
		// Income payments, benefits, deductions
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const result = await ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: Category.SAVINGS,
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

			return result._sum.amount;
		}),
});
