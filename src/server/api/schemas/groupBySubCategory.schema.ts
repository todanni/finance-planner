import { z } from "zod";
import { SubCategoryWhereInputObjectSchema } from "./objects/SubCategoryWhereInput.schema";
import { SubCategoryOrderByWithAggregationInputObjectSchema } from "./objects/SubCategoryOrderByWithAggregationInput.schema";
import { SubCategoryScalarWhereWithAggregatesInputObjectSchema } from "./objects/SubCategoryScalarWhereWithAggregatesInput.schema";
import { SubCategoryScalarFieldEnumSchema } from "./enums/SubCategoryScalarFieldEnum.schema";

export const SubCategoryGroupBySchema = z.object({
  where: SubCategoryWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SubCategoryOrderByWithAggregationInputObjectSchema,
      SubCategoryOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SubCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SubCategoryScalarFieldEnumSchema),
});
