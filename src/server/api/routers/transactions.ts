import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

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
		return ctx.prisma.transaction.aggregate({
			where: {
				userId: ctx.session?.user.id,
			},
			_sum: {
				amount: true,
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

	create: protectedProcedure
		.input(
			z.object({
				amount: z.number(),
				name: z.string(),
				subCategoryId: z.number(),
				userId: z.string().default(''),
				balanceId: z.number().optional(),
			}),
		)
		.mutation(({ ctx, input }) => {
			console.log(input);
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
