import { z } from "zod";
import { UserCreateNestedOneWithoutPaymentsInputObjectSchema } from "./UserCreateNestedOneWithoutPaymentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateWithoutSubCategoryInput> = z
  .object({
    amount: z.number(),
    createdAt: z.date().optional(),
    name: z.string(),
    startDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    repeats: z.boolean(),
    repeatsIn: z.number(),
    user: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputObjectSchema),
  })
  .strict();

export const PaymentCreateWithoutSubCategoryInputObjectSchema = Schema;
