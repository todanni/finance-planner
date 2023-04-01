import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { CategoryRelationFilterObjectSchema } from "./CategoryRelationFilter.schema";
import { CategoryWhereInputObjectSchema } from "./CategoryWhereInput.schema";
import { PaymentListRelationFilterObjectSchema } from "./PaymentListRelationFilter.schema";
import { BalanceListRelationFilterObjectSchema } from "./BalanceListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SubCategoryWhereInputObjectSchema),
        z.lazy(() => SubCategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SubCategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SubCategoryWhereInputObjectSchema),
        z.lazy(() => SubCategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional(),
    payments: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
    balances: z.lazy(() => BalanceListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const SubCategoryWhereInputObjectSchema = Schema;
