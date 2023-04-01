import { z } from "zod";
import { UserCreateNestedOneWithoutBalancesInputObjectSchema } from "./UserCreateNestedOneWithoutBalancesInput.schema";
import { SubCategoryCreateNestedOneWithoutBalancesInputObjectSchema } from "./SubCategoryCreateNestedOneWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateInput> = z
  .object({
    amount: z.number(),
    createdAt: z.date().optional(),
    endDate: z.date().optional().nullable(),
    interestRate: z.number().optional().nullable(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutBalancesInputObjectSchema),
    subCategory: z.lazy(
      () => SubCategoryCreateNestedOneWithoutBalancesInputObjectSchema
    ),
  })
  .strict();

export const BalanceCreateInputObjectSchema = Schema;
