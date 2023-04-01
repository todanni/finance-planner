import { z } from "zod";
import { SubCategoryCreateNestedOneWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateNestedOneWithoutPaymentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateWithoutUserInput> = z
  .object({
    amount: z.number(),
    createdAt: z.date().optional(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    repeats: z.boolean(),
    repeatsIn: z.number(),
    subCategory: z.lazy(
      () => SubCategoryCreateNestedOneWithoutPaymentsInputObjectSchema
    ),
  })
  .strict();

export const PaymentCreateWithoutUserInputObjectSchema = Schema;
