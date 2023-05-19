import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import {
	type SpendingPaymentTotals,
	type IncomePayments,
	type SpendingPayments,
	type Totals,
	type DebtPayments,
	type SavingsPayments,
} from '~/types/Totals';

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
		return ctx.prisma.transaction.count({
			where: {
				userId: ctx.session?.user.id,
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

	totalForIncome: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const totals = await ctx.prisma.transaction.groupBy({
				by: ['subCategoryId'],
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: { in: [Category.INCOME, Category.TAX] },
					},
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				orderBy: {
					_sum: {
						amount: 'desc',
					},
				},
				_sum: {
					amount: true,
				},
			});

			const subCategories = await ctx.prisma.subCategory.findMany({
				where: {
					category: {
						in: [Category.INCOME, Category.TAX],
					},
				},
			});

			const findSubCategory = (id: number) => {
				const subcat = subCategories.find(
					(subCategory) => subCategory.id === id,
				);
				if (!subcat) {
					return { name: 'unknown', category: 'unknown' };
				}
				return subcat;
			};

			const incomePayments: IncomePayments = {
				categories: [
					{
						title: 'Income payments',
						total: 0,
						subCategories: [],
					},
					{
						title: 'Pre-tax deductions',
						total: 0,
						subCategories: [],
					},
				],
			};

			totals.forEach((total) => {
				const subcat = findSubCategory(total.subCategoryId);
				if (total._sum.amount === null) {
					return;
				}

				if (subcat && subcat.category === Category.INCOME) {
					incomePayments.categories[0].total += total._sum.amount;
					incomePayments.categories[0].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}
				if (subcat && subcat.category === Category.TAX) {
					incomePayments.categories[1].total += total._sum.amount;
					incomePayments.categories[1].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}
			});

			return incomePayments;
		}),

	totalForSpending: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const totals = await ctx.prisma.transaction.groupBy({
				by: ['subCategoryId'],
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: {
							in: [
								Category.BILL,
								Category.LIVING_COSTS,
								Category.DISCRETIONARY,
							],
						},
					},
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				orderBy: {
					_sum: {
						amount: 'desc',
					},
				},
				_sum: {
					amount: true,
				},
			});

			const subCategories = await ctx.prisma.subCategory.findMany({
				where: {
					category: {
						in: [Category.BILL, Category.LIVING_COSTS, Category.DISCRETIONARY],
					},
				},
			});

			const findSubCategory = (id: number) => {
				const subcat = subCategories.find(
					(subCategory) => subCategory.id === id,
				);
				if (!subcat) {
					return { name: 'unknown', category: 'unknown' };
				}
				return subcat;
			};

			const spendingPayments: SpendingPaymentTotals = {
				categories: [
					{
						title: 'Bills',
						total: 0,
						subCategories: [],
					},
					{
						title: 'Living costs',
						total: 0,
						subCategories: [],
					},
					{
						title: 'Discretionary',
						total: 0,
						subCategories: [],
					},
				],
			};

			totals.forEach((total) => {
				const subcat = findSubCategory(total.subCategoryId);
				if (total._sum.amount === null) {
					return;
				}

				if (subcat && subcat.category === Category.BILL) {
					spendingPayments.categories[0].total += total._sum.amount;
					spendingPayments.categories[0].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}
				if (subcat && subcat.category === Category.LIVING_COSTS) {
					spendingPayments.categories[1].total += total._sum.amount;
					spendingPayments.categories[1].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}
				if (subcat && subcat.category === Category.DISCRETIONARY) {
					spendingPayments.categories[2].total += total._sum.amount;
					spendingPayments.categories[2].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}
			});

			return spendingPayments;
		}),

	totalForDebt: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const totals = await ctx.prisma.transaction.groupBy({
				by: ['subCategoryId'],
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: Category.DEBT,
					},
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				orderBy: {
					_sum: {
						amount: 'desc',
					},
				},
				_sum: {
					amount: true,
				},
			});

			const subCategories = await ctx.prisma.subCategory.findMany({
				where: {
					category: Category.DEBT,
				},
			});

			const findSubCategory = (id: number) => {
				const subcat = subCategories.find(
					(subCategory) => subCategory.id === id,
				);
				if (!subcat) {
					return { name: 'unknown', category: 'unknown' };
				}
				return subcat;
			};

			const debtRepayments: DebtPayments = {
				categories: [
					{
						title: 'Debt repayment',
						total: 0,
						subCategories: [],
					},
				],
			};

			totals.forEach((total) => {
				const subcat = findSubCategory(total.subCategoryId);
				if (total._sum.amount === null) {
					return;
				}

				if (subcat && subcat.category === Category.DEBT) {
					debtRepayments.categories[0].total += total._sum.amount;
					debtRepayments.categories[0].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}
			});

			return debtRepayments;
		}),

	totalForSavings: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const totals = await ctx.prisma.transaction.groupBy({
				by: ['subCategoryId'],
				where: {
					userId: ctx.session?.user.id,
					subCategory: {
						category: { in: [Category.SAVINGS, Category.TAX] },
					},
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
				},
				orderBy: {
					_sum: {
						amount: 'desc',
					},
				},
				_sum: {
					amount: true,
				},
			});

			const subCategories = await ctx.prisma.subCategory.findMany({
				where: {
					category: { in: [Category.SAVINGS, Category.TAX] },
				},
			});

			const findSubCategory = (id: number) => {
				const subcat = subCategories.find(
					(subCategory) => subCategory.id === id,
				);
				if (!subcat) {
					return { name: 'unknown', category: 'unknown' };
				}
				return subcat;
			};

			const debtRepayments: SavingsPayments = {
				categories: [
					{
						title: 'Savings contributions',
						total: 0,
						subCategories: [],
					},
					{
						title: 'From pre-tax deductions',
						total: 0,
						subCategories: [],
					},
				],
			};

			totals.forEach((total) => {
				const subcat = findSubCategory(total.subCategoryId);
				if (total._sum.amount === null) {
					return;
				}

				if (subcat && subcat.category === Category.SAVINGS) {
					debtRepayments.categories[0].total += total._sum.amount;
					debtRepayments.categories[0].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}

				if (
					subcat &&
					subcat.category === Category.TAX &&
					subcat.name === 'Pension'
				) {
					debtRepayments.categories[1].total += total._sum.amount;
					debtRepayments.categories[1].subCategories.push({
						title: subcat.name,
						total: total._sum.amount,
					});
				}
			});

			return debtRepayments;
		}),

	listForSpending: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const result = await ctx.prisma.transaction.findMany({
				orderBy: {
					subCategoryId: 'asc',
				},
				where: {
					userId: ctx.session?.user.id,
					createdAt: {
						lte: input.endDate,
						gte: input.startDate,
					},
					subCategory: {
						category: {
							in: [
								Category.BILL,
								Category.LIVING_COSTS,
								Category.DISCRETIONARY,
							],
						},
					},
				},
				include: {
					subCategory: true,
				},
			});
			const payments: SpendingPayments = {
				bills: [],
				lc: [],
				discr: [],
			};

			result.forEach((transaction) => {
				switch (transaction.subCategory.category) {
					case Category.BILL:
						payments.bills.push(transaction);
						break;
					case Category.LIVING_COSTS:
						payments.lc.push(transaction);
						break;
					case Category.DISCRETIONARY:
						payments.discr.push(transaction);
						break;
				}
			});

			return payments;
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

	totalPerCategory: protectedProcedure
		.input(
			z.object({
				startDate: z.date(),
				endDate: z.date(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const result = await ctx.prisma.transaction.findMany({
				where: {
					isInitialBalance: false,
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

			const totals: Totals = {
				INCOME: 0,
				TRANSFERS: 0,
				BILL: 0,
				LIVING_COSTS: 0,
				DISCRETIONARY: 0,
				DEBT: 0,
				SAVINGS: 0,
				TAX: 0,
				SPENDING: 0,
				REMAINING: 0,
				hasResults: false,
			};

			if (result.length === 0) {
				return totals;
			}

			// Add up all the amounts for each category
			result.forEach((transaction) => {
				if (transaction.subCategory.name === 'Transfer') {
					totals.TRANSFERS += transaction.amount;
					return;
				}
				totals[transaction.subCategory.category] += transaction.amount;
			});

			totals.SPENDING =
				totals.BILL + totals.DISCRETIONARY + totals.LIVING_COSTS;

			totals.hasResults = true;

			totals.REMAINING =
				totals.INCOME - totals.SPENDING - totals.DEBT - totals.SAVINGS;

			return totals;
		}),

	create: protectedProcedure
		.input(
			z.object({
				amount: z.number(),
				name: z.string(),
				subCategoryId: z.number(),
				userId: z.string().default(''),
				balanceId: z.number().optional(),
				createdAt: z.date().optional(),
			}),
		)
		.mutation(({ ctx, input }) => {
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
