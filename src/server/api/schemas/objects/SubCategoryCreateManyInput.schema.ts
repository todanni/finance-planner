import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    categoryId: z.number(),
  })
  .strict();

export const SubCategoryCreateManyInputObjectSchema = Schema;
