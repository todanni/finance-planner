import { z } from "zod";
import { SubCategoryCreateNestedOneWithoutBalancesInputObjectSchema } from "./SubCategoryCreateNestedOneWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateWithoutUserInput> = z
  .object({
    amount: z.number(),
    createdAt: z.date().optional(),
    endDate: z.date().optional().nullable(),
    interestRate: z.number().optional().nullable(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
    subCategory: z.lazy(
      () => SubCategoryCreateNestedOneWithoutBalancesInputObjectSchema
    ),
  })
  .strict();

export const BalanceCreateWithoutUserInputObjectSchema = Schema;
