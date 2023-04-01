import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    interestRate: z.lazy(() => SortOrderSchema).optional(),
    subCategoryId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BalanceAvgOrderByAggregateInputObjectSchema = Schema;
