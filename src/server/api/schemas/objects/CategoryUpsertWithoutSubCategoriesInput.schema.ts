import { z } from "zod";
import { CategoryUpdateWithoutSubCategoriesInputObjectSchema } from "./CategoryUpdateWithoutSubCategoriesInput.schema";
import { CategoryUncheckedUpdateWithoutSubCategoriesInputObjectSchema } from "./CategoryUncheckedUpdateWithoutSubCategoriesInput.schema";
import { CategoryCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateWithoutSubCategoriesInput.schema";
import { CategoryUncheckedCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryUncheckedCreateWithoutSubCategoriesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutSubCategoriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutSubCategoriesInputObjectSchema),
      z.lazy(
        () => CategoryUncheckedUpdateWithoutSubCategoriesInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutSubCategoriesInputObjectSchema),
      z.lazy(
        () => CategoryUncheckedCreateWithoutSubCategoriesInputObjectSchema
      ),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutSubCategoriesInputObjectSchema = Schema;
