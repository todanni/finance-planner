import { z } from "zod";
import { SubCategoryCreateNestedOneWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateNestedOneWithoutPaymentsInput.schema";
import { UserCreateNestedOneWithoutPaymentsInputObjectSchema } from "./UserCreateNestedOneWithoutPaymentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateInput> = z
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
    user: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputObjectSchema),
  })
  .strict();

export const PaymentCreateInputObjectSchema = Schema;
