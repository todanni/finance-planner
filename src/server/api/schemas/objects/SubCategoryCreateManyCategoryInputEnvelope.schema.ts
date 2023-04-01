import { z } from "zod";
import { SubCategoryCreateManyCategoryInputObjectSchema } from "./SubCategoryCreateManyCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SubCategoryCreateManyCategoryInputObjectSchema),
      z.lazy(() => SubCategoryCreateManyCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SubCategoryCreateManyCategoryInputEnvelopeObjectSchema = Schema;
