import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

export const debtRouter = createTRPCRouter({
	listForCurrentMonth: protectedProcedure.query(({ ctx }) => {
		// Get the first and last day of current month
		const date = new Date();
		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		return ctx.prisma.payment.findMany({
			where: {
				userId: ctx.session?.user.id,
				createdAt: {
					lte: lastDay,
					gte: firstDay,
				},
				subCategory: {
					category: {
						id: 2,
					},
				},
			},
			include: {
				subCategory: true,
			},
		});
	}),

	totalForCurrentMonth: protectedProcedure.query(async ({ ctx }) => {
		// Get the first and last day of current month
		const date = new Date();
		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		const aggregations = await ctx.prisma.payment.aggregate({
			_sum: {
				amount: true,
			},
			where: {
				userId: ctx.session?.user.id,
				createdAt: {
					lte: lastDay,
					gte: firstDay,
				},
				subCategory: {
					category: {
						id: 2,
					},
				},
			},
		});

		return aggregations._sum.amount;
	}),

	getTotalBalance: protectedProcedure.query(async ({ ctx }) => {
		// Get the first and last day of current month
		const date = new Date();
		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		const aggregations = await ctx.prisma.balance.aggregate({
			_sum: {
				amount: true,
			},
			where: {
				userId: ctx.session?.user.id,
				createdAt: {
					lte: lastDay,
					gte: firstDay,
				},
				subCategory: {
					category: {
						id: 2,
					},
				},
			},
		});

		return aggregations._sum.amount;
	}),
});
