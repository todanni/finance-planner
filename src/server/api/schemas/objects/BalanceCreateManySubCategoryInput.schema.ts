import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateManySubCategoryInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string(),
    amount: z.number(),
    createdAt: z.date().optional(),
    endDate: z.date().optional().nullable(),
    interestRate: z.number().optional().nullable(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
  })
  .strict();

export const BalanceCreateManySubCategoryInputObjectSchema = Schema;
