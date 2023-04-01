import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SubCategoryCountOrderByAggregateInputObjectSchema } from "./SubCategoryCountOrderByAggregateInput.schema";
import { SubCategoryAvgOrderByAggregateInputObjectSchema } from "./SubCategoryAvgOrderByAggregateInput.schema";
import { SubCategoryMaxOrderByAggregateInputObjectSchema } from "./SubCategoryMaxOrderByAggregateInput.schema";
import { SubCategoryMinOrderByAggregateInputObjectSchema } from "./SubCategoryMinOrderByAggregateInput.schema";
import { SubCategorySumOrderByAggregateInputObjectSchema } from "./SubCategorySumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SubCategoryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => SubCategoryAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => SubCategoryMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => SubCategoryMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => SubCategorySumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryOrderByWithAggregationInputObjectSchema = Schema;
