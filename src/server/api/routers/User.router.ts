import {
  UserCreateOneSchema,
  UserDeleteOneSchema,
  UserFindManySchema,
  UserUpdateOneSchema,
} from "../schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  createOneUser: publicProcedure
    .input(UserCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneUser = await ctx.prisma.user.create(input);
      return createOneUser;
    }),
  deleteOneUser: publicProcedure
    .input(UserDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneUser = await ctx.prisma.user.delete(input);
      return deleteOneUser;
    }),
  findManyUser: publicProcedure
    .input(UserFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyUser = await ctx.prisma.user.findMany(input);
      return findManyUser;
    }),
  updateOneUser: publicProcedure
    .input(UserUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneUser = await ctx.prisma.user.update(input);
      return updateOneUser;
    }),
});
