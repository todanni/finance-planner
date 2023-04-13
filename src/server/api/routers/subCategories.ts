import { z } from 'zod';
import {
	createTRPCRouter,
	publicProcedure,
	protectedProcedure,
} from '~/server/api/trpc';

export const subCategoriesRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.subCategory.findMany({});
	}),

	getAllForCategory: protectedProcedure
		.input(
			z.object({
				categoryId: z.number(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.subCategory.findMany({
				where: {
					categoryId: input.categoryId,
				},
			});
		}),

	getSecretMessage: protectedProcedure.query(() => {
		return 'you can now see this secret message!';
	}),
});
