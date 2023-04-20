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

	listByCategory: publicProcedure
		.input(
			z.object({
				categoryId: z.number(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.payment.findMany({
				where: {
					subCategory: {
						categoryId: input.categoryId,
					},
					userId: ctx.session?.user.id,
				},
				include: {
					subCategory: true,
				},
			});
		}),

	listForSubCategory: protectedProcedure
		.input(
			z.object({
				subCategoryId: z.number(),
			}),
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.payment.findMany({
				where: {
					subCategoryId: input.subCategoryId,
					userId: ctx.session?.user.id,
				},
				include: {
					subCategory: true,
				},
			});
		}),

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
			},
			include: {
				subCategory: true,
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
			const payment = await ctx.prisma.payment.create({
				data: input,
			});
			return payment;
		}),

	deleteAll: protectedProcedure.query(({ ctx }) => {
		return ctx.prisma.payment.deleteMany({
			where: {
				userId: ctx.session?.user.id,
			},
		});
	}),
	deleteAllFromCurrentMonth: protectedProcedure.query(({ ctx }) => {
		const date = new Date();
		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		return ctx.prisma.payment.deleteMany({
			where: {
				userId: ctx.session?.user.id,
				createdAt: {
					lte: lastDay,
					gte: firstDay,
				},
			},
		});
	}),
});