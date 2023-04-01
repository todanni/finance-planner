import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SubCategoryOrderByWithRelationInputObjectSchema } from "./SubCategoryOrderByWithRelationInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    repeats: z.lazy(() => SortOrderSchema).optional(),
    repeatsIn: z.lazy(() => SortOrderSchema).optional(),
    subCategoryId: z.lazy(() => SortOrderSchema).optional(),
    subCategory: z
      .lazy(() => SubCategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const PaymentOrderByWithRelationInputObjectSchema = Schema;
