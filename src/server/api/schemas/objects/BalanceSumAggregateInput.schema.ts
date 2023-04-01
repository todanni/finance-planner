import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    interestRate: z.literal(true).optional(),
    subCategoryId: z.literal(true).optional(),
  })
  .strict();

export const BalanceSumAggregateInputObjectSchema = Schema;
