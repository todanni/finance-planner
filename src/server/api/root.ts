/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter } from "~/server/api/trpc";
import { balancesRouter } from "./routers/Balance.router";
import { categoriesRouter } from "./routers/Category.router";
import { paymentsRouter } from "./routers/Payment.router";
import { subcategoriesRouter } from "./routers/SubCategory.router";
import { usersRouter } from "./routers/User.router";

export const appRouter = createTRPCRouter({
  user: usersRouter,
  balance: balancesRouter,
  payment: paymentsRouter,
  category: categoriesRouter,
  subcategory: subcategoriesRouter,
});

export type AppRouter = typeof appRouter;
