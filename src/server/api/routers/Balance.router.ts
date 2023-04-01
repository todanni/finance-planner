import {
  BalanceCreateOneSchema,
  BalanceDeleteOneSchema,
  BalanceFindManySchema,
  BalanceUpdateOneSchema,
} from "../schemas";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const balancesRouter = createTRPCRouter({
  createOneBalance: publicProcedure
    .input(BalanceCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneBalance = await ctx.prisma.balance.create(input);
      return createOneBalance;
    }),
  deleteOneBalance: publicProcedure
    .input(BalanceDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneBalance = await ctx.prisma.balance.delete(input);
      return deleteOneBalance;
    }),
  findManyBalance: publicProcedure
    .input(BalanceFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyBalance = await ctx.prisma.balance.findMany(input);
      return findManyBalance;
    }),
  updateOneBalance: publicProcedure
    .input(BalanceUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneBalance = await ctx.prisma.balance.update(input);
      return updateOneBalance;
    }),
});
