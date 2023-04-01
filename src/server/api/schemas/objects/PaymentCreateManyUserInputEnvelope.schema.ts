import { z } from "zod";
import { PaymentCreateManyUserInputObjectSchema } from "./PaymentCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PaymentCreateManyUserInputObjectSchema),
      z.lazy(() => PaymentCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PaymentCreateManyUserInputEnvelopeObjectSchema = Schema;
