import { z } from "zod";
import { SubCategoryCreateNestedManyWithoutCategoryInputObjectSchema } from "./SubCategoryCreateNestedManyWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    name: z.string(),
    subCategories: z
      .lazy(() => SubCategoryCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
