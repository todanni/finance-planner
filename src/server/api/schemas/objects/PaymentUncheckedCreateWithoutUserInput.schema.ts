import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    amount: z.number(),
    createdAt: z.date().optional(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    repeats: z.boolean(),
    repeatsIn: z.number(),
    subCategoryId: z.number(),
  })
  .strict();

export const PaymentUncheckedCreateWithoutUserInputObjectSchema = Schema;
