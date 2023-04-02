import { createTRPCRouter } from "~/server/api/trpc";
import { paymentsRouter } from "~/server/api/routers/payments";
import { categoriesRouter } from "./routers/categories";
import { subCategoriesRouter } from "./routers/subCategories";

export const appRouter = createTRPCRouter({
  payment: paymentsRouter,
  category: categoriesRouter,
  subCategory: subCategoriesRouter,
});

export type AppRouter = typeof appRouter;
