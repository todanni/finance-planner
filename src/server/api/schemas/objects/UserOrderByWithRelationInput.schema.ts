import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { BalanceOrderByRelationAggregateInputObjectSchema } from "./BalanceOrderByRelationAggregateInput.schema";
import { PaymentOrderByRelationAggregateInputObjectSchema } from "./PaymentOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    balances: z
      .lazy(() => BalanceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    payments: z
      .lazy(() => PaymentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
