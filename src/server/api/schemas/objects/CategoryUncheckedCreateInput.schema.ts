import { z } from "zod";
import { SubCategoryUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from "./SubCategoryUncheckedCreateNestedManyWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    subCategories: z
      .lazy(
        () =>
          SubCategoryUncheckedCreateNestedManyWithoutCategoryInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateInputObjectSchema = Schema;
