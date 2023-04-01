import { z } from "zod";
import { SubCategoryOrderByWithRelationInputObjectSchema } from "./objects/SubCategoryOrderByWithRelationInput.schema";
import { SubCategoryWhereInputObjectSchema } from "./objects/SubCategoryWhereInput.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./objects/SubCategoryWhereUniqueInput.schema";
import { SubCategoryCountAggregateInputObjectSchema } from "./objects/SubCategoryCountAggregateInput.schema";
import { SubCategoryMinAggregateInputObjectSchema } from "./objects/SubCategoryMinAggregateInput.schema";
import { SubCategoryMaxAggregateInputObjectSchema } from "./objects/SubCategoryMaxAggregateInput.schema";
import { SubCategoryAvgAggregateInputObjectSchema } from "./objects/SubCategoryAvgAggregateInput.schema";
import { SubCategorySumAggregateInputObjectSchema } from "./objects/SubCategorySumAggregateInput.schema";

export const SubCategoryAggregateSchema = z.object({
  orderBy: z
    .union([
      SubCategoryOrderByWithRelationInputObjectSchema,
      SubCategoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SubCategoryWhereInputObjectSchema.optional(),
  cursor: SubCategoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SubCategoryCountAggregateInputObjectSchema])
    .optional(),
  _min: SubCategoryMinAggregateInputObjectSchema.optional(),
  _max: SubCategoryMaxAggregateInputObjectSchema.optional(),
  _avg: SubCategoryAvgAggregateInputObjectSchema.optional(),
  _sum: SubCategorySumAggregateInputObjectSchema.optional(),
});
