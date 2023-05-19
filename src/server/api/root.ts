import { createTRPCRouter } from '~/server/api/trpc';
import { transactionsRouter } from './routers/transactions';
import { subcategoryRouter } from './routers/subcategory';
import { categoriesRouter } from './routers/categories';
import { balanceRouter } from './routers/balance';
import { savingsRouter } from './routers/savings';
import { totalsRouter } from './routers/totals';

export const appRouter = createTRPCRouter({
	transactions: transactionsRouter,
	subcategories: subcategoryRouter,
	category: categoriesRouter,
	balance: balanceRouter,
	savings: savingsRouter,
	totals: totalsRouter,
});

export type AppRouter = typeof appRouter;
