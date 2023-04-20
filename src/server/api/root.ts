import { createTRPCRouter } from '~/server/api/trpc';
import { transactionsRouter } from './routers/transactions';

export const appRouter = createTRPCRouter({
	transactions: transactionsRouter,
});

export type AppRouter = typeof appRouter;
