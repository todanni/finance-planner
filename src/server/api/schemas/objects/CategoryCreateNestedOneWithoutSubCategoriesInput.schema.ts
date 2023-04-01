import { z } from "zod";
import { CategoryCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateWithoutSubCategoriesInput.schema";
import { CategoryUncheckedCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryUncheckedCreateWithoutSubCategoriesInput.schema";
import { CategoryCreateOrConnectWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateOrConnectWithoutSubCategoriesInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutSubCategoriesInput> =
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
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CategoryCreateNestedOneWithoutSubCategoriesInputObjectSchema =
  Schema;
