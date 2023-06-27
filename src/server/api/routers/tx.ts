import { Category } from '@prisma/client';
import { DateTime } from 'luxon';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { transactionSchema } from '~/types/schemas';

const getCurrentMonthDates = () => {
	const startDate = DateTime.now().startOf('month').toJSDate();
	const endDate = DateTime.now().endOf('month').toJSDate();
	return { startDate, endDate };
};

export const txRouter = createTRPCRouter({
	count: protectedProcedure.query(async ({ ctx }) => {
		const sum = await ctx.prisma.transaction.aggregate({
			where: {
				userId: ctx.session?.user.id,
			},
			_count: {
				amount: true,
			},
		});

		return sum._count.amount;
	}),

	total: protectedProcedure
		.input(
			z.object({
				startDate: z.date().default(getCurrentMonthDates().startDate),
				endDate: z.date().default(getCurrentMonthDates().endDate),
			}),
		)
		.query(async ({ ctx, input }) => {
			const total = await ctx.prisma.transaction.groupBy({
				by: ['category'],
				where: {
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				_sum: {
					amount: true,
				},
			});
			const response = Object.fromEntries(
				total.map((t) => [
					t.category,
					{
						total: t._sum.amount,
						percentage: 0,
					},
				]),
			);

			return response;
		}),

	sumForCategory: protectedProcedure
		.input(
			z.object({
				startDate: z.date().default(getCurrentMonthDates().startDate),
				endDate: z.date().default(getCurrentMonthDates().endDate),
				category: z.nativeEnum(Category),
			}),
		)
		.query(async ({ ctx, input }) => {
			const sum = await ctx.prisma.transaction.aggregate({
				where: {
					category: input.category,
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				_sum: {
					amount: true,
				},
			});

			return sum._sum.amount;
		}),

	listForCategory: protectedProcedure
		.input(
			z.object({
				startDate: z.date().default(getCurrentMonthDates().startDate),
				endDate: z.date().default(getCurrentMonthDates().endDate),
				category: z.nativeEnum(Category),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.transaction.findMany({
				where: {
					category: input.category,
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
			});
		}),

	list: protectedProcedure
		.input(
			z.object({
				startDate: z.date().default(getCurrentMonthDates().startDate),
				endDate: z.date().default(getCurrentMonthDates().endDate),
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
				orderBy: {
					createdAt: 'asc',
				},
			});
		}),

	add: protectedProcedure
		.input(transactionSchema)
		.mutation(({ ctx, input }) => {
			input.userId = ctx.session?.user.id;
			return ctx.prisma.transaction.create({
				data: {
					...input,
				},
			});
		}),

	delete: protectedProcedure
		.input(
			z.object({
				startDate: z.date().default(getCurrentMonthDates().startDate),
				endDate: z.date().default(getCurrentMonthDates().endDate),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.prisma.transaction.deleteMany({
				where: {
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
			});
		}),
	deleteOne: protectedProcedure
		.input(
			z.object({
				id: z.number(),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.prisma.transaction.delete({
				where: {
					id: input.id,
				},
			});
		}),
	// TODO: Add this when needed
	edit: protectedProcedure
		.input(
			z.object({
				id: z.number(),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.prisma.transaction.update({
				where: {
					id: input.id,
				},
				data: {
					...input,
				},
			});
		}),
});
