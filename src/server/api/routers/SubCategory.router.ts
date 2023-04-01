import {
  SubCategoryCreateOneSchema,
  SubCategoryDeleteOneSchema,
  SubCategoryFindManySchema,
  SubCategoryUpdateOneSchema,
} from "../schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const subcategoriesRouter = createTRPCRouter({
  createOneSubCategory: publicProcedure
    .input(SubCategoryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneSubCategory = await ctx.prisma.subCategory.create(input);
      return createOneSubCategory;
    }),
  deleteOneSubCategory: publicProcedure
    .input(SubCategoryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneSubCategory = await ctx.prisma.subCategory.delete(input);
      return deleteOneSubCategory;
    }),
  findManySubCategory: publicProcedure
    .input(SubCategoryFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManySubCategory = await ctx.prisma.subCategory.findMany(input);
      return findManySubCategory;
    }),
  updateOneSubCategory: publicProcedure
    .input(SubCategoryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneSubCategory = await ctx.prisma.subCategory.update(input);
      return updateOneSubCategory;
    }),
});
