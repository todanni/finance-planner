import { z } from "zod";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateWithoutSubCategoriesInput.schema";
import { CategoryUncheckedCreateWithoutSubCategoriesInputObjectSchema } from "./CategoryUncheckedCreateWithoutSubCategoriesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutSubCategoriesInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CategoryCreateWithoutSubCategoriesInputObjectSchema),
        z.lazy(
          () => CategoryUncheckedCreateWithoutSubCategoriesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CategoryCreateOrConnectWithoutSubCategoriesInputObjectSchema =
  Schema;
