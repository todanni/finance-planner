import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { balanceSchema } from '~/types/schemas';
import { getCurrentMonthDates } from '~/utils/daterange';

export const balanceRouter = createTRPCRouter({
	list: protectedProcedure.query(({ ctx }) => {
		return ctx.prisma.balanceRecord.findMany({
			where: {
				userId: ctx.session?.user.id,
			},
			include: {
				balance: true,
			},
		});
	}),

	add: protectedProcedure
		.input(balanceSchema)
		.mutation(async ({ ctx, input }) => {
			const balance = await ctx.prisma.balance.create({
				data: {
					name: input.name,
					category: input.category,
					subCategoryId: input.subCategoryId,
					minPayment: input.minPayment,
					interestRate: input.interestRate,
					userId: ctx.session?.user.id,
				},
			});

			return ctx.prisma.balanceRecord.create({
				data: {
					balanceId: balance.id,
					amount: input.amount,
					userId: ctx.session?.user.id,
				},
			});
		}),

	// TODO: Port over the old balance estimate logic
	estimate: protectedProcedure.query(({ ctx }) => {
		return ctx.prisma.balanceRecord.findMany({
			where: {
				userId: ctx.session?.user.id,
			},
			include: {
				balance: true,
			},
		});
	}),

	// TODO: This function should sum up all the
	// latest balance records for each balance of a given category
	sumForCategory: protectedProcedure
		.input(
			z.object({
				startDate: z.date().default(getCurrentMonthDates().startDate),
				endDate: z.date().default(getCurrentMonthDates().endDate),
				category: z.nativeEnum(Category),
			}),
		)
		.query(async ({ ctx }) => {
			const groupBy = await ctx.prisma.balanceRecord.groupBy({
				by: ['balanceId'],
				_sum: {
					amount: true,
				},
				where: {
					userId: ctx.session?.user.id,
				},
				orderBy: {
					balanceId: 'desc',
				},
				// take: 1,
			});

			return groupBy;
		}),
});
