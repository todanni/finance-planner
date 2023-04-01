import { z } from "zod";
import { SubCategoryWhereInputObjectSchema } from "./SubCategoryWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryListRelationFilter> = z
  .object({
    every: z.lazy(() => SubCategoryWhereInputObjectSchema).optional(),
    some: z.lazy(() => SubCategoryWhereInputObjectSchema).optional(),
    none: z.lazy(() => SubCategoryWhereInputObjectSchema).optional(),
  })
  .strict();

export const SubCategoryListRelationFilterObjectSchema = Schema;
