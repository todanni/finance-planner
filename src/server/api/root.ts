import { createTRPCRouter } from '~/server/api/trpc';
import { transactionsRouter } from './routers/transactions';
import { subcategoryRouter } from './routers/subcategory';
import { categoriesRouter } from './routers/categories';

export const appRouter = createTRPCRouter({
	transactions: transactionsRouter,
	subcategories: subcategoryRouter,
	category: categoriesRouter,
});

export type AppRouter = typeof appRouter;
