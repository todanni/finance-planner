import { Category } from '@prisma/client';
import { z } from 'zod';

const transactionSchema = z.object({
	id: z.number().optional(),
	amount: z.number(),
	createdAt: z.date().default(() => new Date()),
	name: z.string(),
	category: z.nativeEnum(Category),
	subCategoryId: z.number(),
	userId: z.string().default(''),
	balanceId: z.number().optional(),
	isInitialBalance: z.boolean().default(false),
});

const balanceSchema = z.object({
	id: z.number().optional(),
	name: z.string(),
	amount: z.number(),
	category: z.nativeEnum(Category),
	subCategoryId: z.number(),
	createdAt: z.date(),
	interestRate: z.number(),
	minPayment: z.number(),
	userId: z.string().default(''),
});

const budgetSchema = z.object({
	category: z.string(),
	amount: z.number(),
	name: z.string(),
});

type BudgetSchema = z.infer<typeof budgetSchema>;

export { transactionSchema, balanceSchema, budgetSchema, type BudgetSchema };
