import { z } from "zod";
import { PaymentCreateManySubCategoryInputObjectSchema } from "./PaymentCreateManySubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateManySubCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PaymentCreateManySubCategoryInputObjectSchema),
      z.lazy(() => PaymentCreateManySubCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PaymentCreateManySubCategoryInputEnvelopeObjectSchema = Schema;
