import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SubCategoryOrderByRelationAggregateInputObjectSchema } from "./SubCategoryOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    subCategories: z
      .lazy(() => SubCategoryOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryOrderByWithRelationInputObjectSchema = Schema;
