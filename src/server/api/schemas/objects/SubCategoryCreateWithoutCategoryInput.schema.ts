import { z } from "zod";
import { PaymentCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./PaymentCreateNestedManyWithoutSubCategoryInput.schema";
import { BalanceCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./BalanceCreateNestedManyWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateWithoutCategoryInput> = z
  .object({
    name: z.string(),
    payments: z
      .lazy(() => PaymentCreateNestedManyWithoutSubCategoryInputObjectSchema)
      .optional(),
    balances: z
      .lazy(() => BalanceCreateNestedManyWithoutSubCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryCreateWithoutCategoryInputObjectSchema = Schema;
