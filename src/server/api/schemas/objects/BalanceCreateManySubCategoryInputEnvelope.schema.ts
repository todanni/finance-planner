import { z } from "zod";
import { BalanceCreateManySubCategoryInputObjectSchema } from "./BalanceCreateManySubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateManySubCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BalanceCreateManySubCategoryInputObjectSchema),
      z.lazy(() => BalanceCreateManySubCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BalanceCreateManySubCategoryInputEnvelopeObjectSchema = Schema;
