import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string().optional(),
  })
  .strict();

export const BalanceWhereUniqueInputObjectSchema = Schema;
