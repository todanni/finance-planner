import { z } from 'zod';

import {
	createTRPCRouter,
	publicProcedure,
	protectedProcedure,
} from '~/server/api/trpc';

export const paymentsRouter = createTRPCRouter({
	listAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.payment.findMany({
			where: {
				userId: ctx.session?.user.id,
			},
		});
	}),

	listByCategory: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.payment.findMany({
			where: {
				userId: ctx.session?.user.id,
			},
		});
	}),

	add: protectedProcedure
		.input(
			z.object({
				name: z.string(),
				amount: z.number(),
				endDate: z.date().optional(),
				startDate: z.date().optional(),
				isNet: z.boolean(),
				repeats: z.boolean(),
				repeatsIn: z.number().default(0),
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

			console.log(input);

			const payment = await ctx.prisma.payment.create({
				data: input,
			});

			return payment;
		}),
});
