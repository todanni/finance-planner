import { z } from "zod";
import { CategoryCreateNestedOneWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateNestedOneWithoutSubCategoriesInput.schema";
import { PaymentCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./PaymentCreateNestedManyWithoutSubCategoryInput.schema";
import { BalanceCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./BalanceCreateNestedManyWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateInput> = z
  .object({
    name: z.string(),
    category: z.lazy(
      () => CategoryCreateNestedOneWithoutSubCategoriesInputObjectSchema
    ),
    payments: z
      .lazy(() => PaymentCreateNestedManyWithoutSubCategoryInputObjectSchema)
      .optional(),
    balances: z
      .lazy(() => BalanceCreateNestedManyWithoutSubCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryCreateInputObjectSchema = Schema;
