import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { BalanceCountOrderByAggregateInputObjectSchema } from "./BalanceCountOrderByAggregateInput.schema";
import { BalanceAvgOrderByAggregateInputObjectSchema } from "./BalanceAvgOrderByAggregateInput.schema";
import { BalanceMaxOrderByAggregateInputObjectSchema } from "./BalanceMaxOrderByAggregateInput.schema";
import { BalanceMinOrderByAggregateInputObjectSchema } from "./BalanceMinOrderByAggregateInput.schema";
import { BalanceSumOrderByAggregateInputObjectSchema } from "./BalanceSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    interestRate: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    subCategoryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BalanceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => BalanceAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => BalanceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BalanceMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => BalanceSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BalanceOrderByWithAggregationInputObjectSchema = Schema;
