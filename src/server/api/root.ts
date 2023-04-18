import { createTRPCRouter } from '~/server/api/trpc';
import { paymentsRouter } from '~/server/api/routers/payments';
import { categoriesRouter } from './routers/categories';
import { subCategoriesRouter } from './routers/subCategories';
import { balanceRouter } from './routers/balance';

export const appRouter = createTRPCRouter({
	payment: paymentsRouter,
	balance: balanceRouter,
	category: categoriesRouter,
	subCategory: subCategoriesRouter,
});

export type AppRouter = typeof appRouter;
