import { z } from "zod";
import { BalanceWhereInputObjectSchema } from "./BalanceWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceListRelationFilter> = z
  .object({
    every: z.lazy(() => BalanceWhereInputObjectSchema).optional(),
    some: z.lazy(() => BalanceWhereInputObjectSchema).optional(),
    none: z.lazy(() => BalanceWhereInputObjectSchema).optional(),
  })
  .strict();

export const BalanceListRelationFilterObjectSchema = Schema;
