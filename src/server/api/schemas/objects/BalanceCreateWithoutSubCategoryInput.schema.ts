import { z } from "zod";
import { UserCreateNestedOneWithoutBalancesInputObjectSchema } from "./UserCreateNestedOneWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateWithoutSubCategoryInput> = z
  .object({
    amount: z.number(),
    createdAt: z.date().optional(),
    endDate: z.date().optional().nullable(),
    interestRate: z.number().optional().nullable(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutBalancesInputObjectSchema),
  })
  .strict();

export const BalanceCreateWithoutSubCategoryInputObjectSchema = Schema;
