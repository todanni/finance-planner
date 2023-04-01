import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DecimalFilterObjectSchema } from "./DecimalFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { DecimalNullableFilterObjectSchema } from "./DecimalNullableFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { SubCategoryRelationFilterObjectSchema } from "./SubCategoryRelationFilter.schema";
import { SubCategoryWhereInputObjectSchema } from "./SubCategoryWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BalanceWhereInputObjectSchema),
        z.lazy(() => BalanceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BalanceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BalanceWhereInputObjectSchema),
        z.lazy(() => BalanceWhereInputObjectSchema).array(),
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
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    interestRate: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    subCategoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    subCategory: z
      .union([
        z.lazy(() => SubCategoryRelationFilterObjectSchema),
        z.lazy(() => SubCategoryWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BalanceWhereInputObjectSchema = Schema;
