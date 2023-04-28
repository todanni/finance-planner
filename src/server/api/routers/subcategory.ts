import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const subcategoryRouter = createTRPCRouter({
	list: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.subCategory.findMany({});
	}),

	listByCategory: publicProcedure
		.input(
			z.object({
				category: z.nativeEnum(Category),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.subCategory.findMany({
				where: {
					category: input.category,
				},
			});
		}),

	listForBalances: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.subCategory.findMany({
			where: {
				category: {
					in: [Category.DEBT, Category.SAVINGS],
				},
			},
		});
	}),
});
