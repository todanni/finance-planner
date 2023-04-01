import {
  PaymentCreateOneSchema,
  PaymentDeleteOneSchema,
  PaymentFindManySchema,
  PaymentUpdateOneSchema,
} from "../schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const paymentsRouter = createTRPCRouter({
  createOnePayment: publicProcedure
    .input(PaymentCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePayment = await ctx.prisma.payment.create(input);
      return createOnePayment;
    }),
  deleteOnePayment: publicProcedure
    .input(PaymentDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePayment = await ctx.prisma.payment.delete(input);
      return deleteOnePayment;
    }),
  findManyPayment: publicProcedure
    .input(PaymentFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPayment = await ctx.prisma.payment.findMany(input);
      return findManyPayment;
    }),
  updateOnePayment: publicProcedure
    .input(PaymentUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePayment = await ctx.prisma.payment.update(input);
      return updateOnePayment;
    }),
});
