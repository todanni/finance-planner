import { z } from "zod";
import { CategoryCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateWithoutSubCategoriesInput.schema";
import { CategoryUncheckedCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryUncheckedCreateWithoutSubCategoriesInput.schema";
import { CategoryCreateOrConnectWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateOrConnectWithoutSubCategoriesInput.schema";
import { CategoryUpsertWithoutSubCategoriesInputObjectSchema } from "./CategoryUpsertWithoutSubCategoriesInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryUpdateWithoutSubCategoriesInputObjectSchema } from "./CategoryUpdateWithoutSubCategoriesInput.schema";
import { CategoryUncheckedUpdateWithoutSubCategoriesInputObjectSchema } from "./CategoryUncheckedUpdateWithoutSubCategoriesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutSubCategoriesInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedCreateWithoutSubCategoriesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => CategoryCreateOrConnectWithoutSubCategoriesInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => CategoryUpsertWithoutSubCategoriesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutSubCategoriesInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedUpdateWithoutSubCategoriesInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const CategoryUpdateOneRequiredWithoutSubCategoriesNestedInputObjectSchema =
  Schema;
