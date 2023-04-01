import { z } from "zod";
import { CategoryCreateNestedOneWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateNestedOneWithoutSubCategoriesInput.schema";
import { BalanceCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./BalanceCreateNestedManyWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateWithoutPaymentsInput> = z
  .object({
    name: z.string(),
    category: z.lazy(
      () => CategoryCreateNestedOneWithoutSubCategoriesInputObjectSchema
    ),
    balances: z
      .lazy(() => BalanceCreateNestedManyWithoutSubCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryCreateWithoutPaymentsInputObjectSchema = Schema;
