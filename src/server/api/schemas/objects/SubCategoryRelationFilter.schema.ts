import { z } from "zod";
import { SubCategoryWhereInputObjectSchema } from "./SubCategoryWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryRelationFilter> = z
  .object({
    is: z.lazy(() => SubCategoryWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => SubCategoryWhereInputObjectSchema).optional(),
  })
  .strict();

export const SubCategoryRelationFilterObjectSchema = Schema;
