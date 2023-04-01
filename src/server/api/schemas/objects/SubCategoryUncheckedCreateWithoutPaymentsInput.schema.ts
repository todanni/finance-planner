import { z } from "zod";
import { BalanceUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedCreateNestedManyWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUncheckedCreateWithoutPaymentsInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      categoryId: z.number(),
      balances: z
        .lazy(
          () =>
            BalanceUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema =
  Schema;
