import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const paymentsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.payment.findMany({
      where: {
        userId: ctx.session?.user.id,
      },
    });
  }),

  create: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.payment.create({
      data: {
        createdAt: "",
        name: "",
        amount: "",
        recurring: true,
        paidOn: "",
        nextPaidOn: "",
        interestRate: 0.1,
        userId: "",
        subCategoryId: 1,
      },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
