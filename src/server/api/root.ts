import { createTRPCRouter } from '~/server/api/trpc';
import { transactionsRouter } from './routers/transactions';
import { subcategoryRouter } from './routers/subcategory';

export const appRouter = createTRPCRouter({
	transactions: transactionsRouter,
	subcategories: subcategoryRouter,
});

export type AppRouter = typeof appRouter;
