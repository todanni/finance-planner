import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { CategoryOrderByWithRelationInputObjectSchema } from "./CategoryOrderByWithRelationInput.schema";
import { PaymentOrderByRelationAggregateInputObjectSchema } from "./PaymentOrderByRelationAggregateInput.schema";
import { BalanceOrderByRelationAggregateInputObjectSchema } from "./BalanceOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    payments: z
      .lazy(() => PaymentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    balances: z
      .lazy(() => BalanceOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryOrderByWithRelationInputObjectSchema = Schema;
