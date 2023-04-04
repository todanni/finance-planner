import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { z } from 'zod';

export const balanceRouter = createTRPCRouter({
	add: protectedProcedure
		.input(
			z.object({
				name: z.string(),
				amount: z.number(),
				endDate: z.date().optional(),
				startDate: z.date().optional(),
				subCategory: z.object({
					connect: z.object({
						id: z.number().optional(),
					}),
				}),
				user: z.object({
					connect: z.object({
						id: z.string().optional(),
					}),
				}),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			input.user.connect.id = ctx.session.user.id;

			const balance = await ctx.prisma.balance.create({
				data: input,
			});

			return balance;
		}),

	listAll: protectedProcedure.query(({ ctx }) => {
		return ctx.prisma.balance.findMany({
			where: {
				userId: ctx.session?.user.id,
			},
		});
	}),

	listByCategory: protectedProcedure
		.input(
			z.object({
				categoryId: z.number(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.balance.findMany({
				where: {
					userId: ctx.session?.user.id,
					subCategoryId: input.categoryId,
				},
			});
		}),

	update: protectedProcedure
		.input(
			z.object({
				name: z.string(),
			}),
		)
		.mutation(({ ctx, input }) => {
			console.log(input.name);
			console.log(ctx.session.user.id);
			input.name = '';

			return 'you can now see this secret message!';
		}),

	delete: protectedProcedure
		.input(
			z.object({
				name: z.string(),
			}),
		)
		.mutation(({ ctx, input }) => {
			console.log(input.name);
			console.log(ctx.session.user.id);
			input.name = '';

			return 'you can now see this secret message!';
		}),
});
