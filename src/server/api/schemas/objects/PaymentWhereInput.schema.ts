import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DecimalFilterObjectSchema } from "./DecimalFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { SubCategoryRelationFilterObjectSchema } from "./SubCategoryRelationFilter.schema";
import { SubCategoryWhereInputObjectSchema } from "./SubCategoryWhereInput.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PaymentWhereInputObjectSchema),
        z.lazy(() => PaymentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PaymentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PaymentWhereInputObjectSchema),
        z.lazy(() => PaymentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    repeats: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    repeatsIn: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    subCategoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    subCategory: z
      .union([
        z.lazy(() => SubCategoryRelationFilterObjectSchema),
        z.lazy(() => SubCategoryWhereInputObjectSchema),
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PaymentWhereInputObjectSchema = Schema;
