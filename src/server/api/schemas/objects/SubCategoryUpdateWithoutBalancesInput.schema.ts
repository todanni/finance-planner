import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { CategoryUpdateOneRequiredWithoutSubCategoriesNestedInputObjectSchema } from "./CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput.schema";
import { PaymentUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./PaymentUpdateManyWithoutSubCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateWithoutBalancesInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    category: z
      .lazy(
        () =>
          CategoryUpdateOneRequiredWithoutSubCategoriesNestedInputObjectSchema
      )
      .optional(),
    payments: z
      .lazy(() => PaymentUpdateManyWithoutSubCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryUpdateWithoutBalancesInputObjectSchema = Schema;
