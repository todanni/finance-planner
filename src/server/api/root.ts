import { createTRPCRouter } from '~/server/api/trpc';
import { subcategoryRouter } from './routers/subcategory';
// import { balanceRouter } from './routers/balanceOld';
import { savingsRouter } from './routers/savings';
import { incomeRouter } from './routers/income';
import { txRouter } from './routers/tx';
import { balanceRouter } from './routers/balance';

export const appRouter = createTRPCRouter({
	subcategories: subcategoryRouter,
	balance: balanceRouter,
	savings: savingsRouter,
	income: incomeRouter,
	tx: txRouter,
});

export type AppRouter = typeof appRouter;
