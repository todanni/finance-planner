import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

export const incomeRouter = createTRPCRouter({
	overview: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					category: Category.INCOME,
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

	// Sum of all income transactions + Sum of all tax transactions(deductions)
	net: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					category: Category.INCOME,
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
	// Sum of all income transactions
	gross: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.aggregate({
				where: {
					userId: ctx.session?.user.id,
					category: Category.INCOME,
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
});
