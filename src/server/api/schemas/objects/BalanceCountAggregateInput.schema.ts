import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    interestRate: z.literal(true).optional(),
    name: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    subCategoryId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BalanceCountAggregateInputObjectSchema = Schema;
