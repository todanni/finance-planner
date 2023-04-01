import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateManySubCategoryInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string(),
    amount: z.number(),
    createdAt: z.date().optional(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    repeats: z.boolean(),
    repeatsIn: z.number(),
  })
  .strict();

export const PaymentCreateManySubCategoryInputObjectSchema = Schema;
