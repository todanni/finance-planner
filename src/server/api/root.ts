import { createTRPCRouter } from '~/server/api/trpc';
import { paymentsRouter } from '~/server/api/routers/payments';
import { categoriesRouter } from './routers/categories';
import { subCategoriesRouter } from './routers/subCategories';
import { incomeRouter } from './routers/income';
import { spendingRouter } from './routers/spending';
import { debtRouter } from './routers/debt';
import { savingsRouter } from './routers/savings';

export const appRouter = createTRPCRouter({
	payment: paymentsRouter,
	category: categoriesRouter,
	subCategory: subCategoriesRouter,
	income: incomeRouter,
	spending: spendingRouter,
	debt: debtRouter,
	savings: savingsRouter,
});

export type AppRouter = typeof appRouter;
