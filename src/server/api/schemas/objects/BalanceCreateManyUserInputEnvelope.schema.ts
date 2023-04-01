import { z } from "zod";
import { BalanceCreateManyUserInputObjectSchema } from "./BalanceCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BalanceCreateManyUserInputObjectSchema),
      z.lazy(() => BalanceCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BalanceCreateManyUserInputEnvelopeObjectSchema = Schema;
