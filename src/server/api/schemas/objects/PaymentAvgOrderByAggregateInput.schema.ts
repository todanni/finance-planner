import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    repeatsIn: z.lazy(() => SortOrderSchema).optional(),
    subCategoryId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PaymentAvgOrderByAggregateInputObjectSchema = Schema;
