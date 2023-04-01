import { z } from "zod";
import { CategoryCreateNestedOneWithoutSubCategoriesInputObjectSchema } from "./CategoryCreateNestedOneWithoutSubCategoriesInput.schema";
import { PaymentCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./PaymentCreateNestedManyWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateWithoutBalancesInput> = z
  .object({
    name: z.string(),
    category: z.lazy(
      () => CategoryCreateNestedOneWithoutSubCategoriesInputObjectSchema
    ),
    payments: z
      .lazy(() => PaymentCreateNestedManyWithoutSubCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryCreateWithoutBalancesInputObjectSchema = Schema;
