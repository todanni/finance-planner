import { z } from "zod";
import { PaymentUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedCreateNestedManyWithoutSubCategoryInput.schema";
import { BalanceUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedCreateNestedManyWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUncheckedCreateWithoutCategoryInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      payments: z
        .lazy(
          () =>
            PaymentUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema
        )
        .optional(),
      balances: z
        .lazy(
          () =>
            BalanceUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema =
  Schema;
