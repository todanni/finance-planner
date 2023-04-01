import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
  })
  .strict();

export const SubCategoryMinAggregateInputObjectSchema = Schema;
