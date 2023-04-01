import {
  CategoryCreateOneSchema,
  CategoryDeleteOneSchema,
  CategoryFindManySchema,
  CategoryUpdateOneSchema,
} from "../schemas";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const categoriesRouter = createTRPCRouter({
  createOneCategory: publicProcedure
    .input(CategoryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneCategory = await ctx.prisma.category.create(input);
      return createOneCategory;
    }),
  deleteOneCategory: publicProcedure
    .input(CategoryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneCategory = await ctx.prisma.category.delete(input);
      return deleteOneCategory;
    }),
  findManyCategory: publicProcedure
    .input(CategoryFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyCategory = await ctx.prisma.category.findMany(input);
      return findManyCategory;
    }),
  updateOneCategory: publicProcedure
    .input(CategoryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneCategory = await ctx.prisma.category.update(input);
      return updateOneCategory;
    }),
});
