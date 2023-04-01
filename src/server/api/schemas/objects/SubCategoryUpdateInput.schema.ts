import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { CategoryUpdateOneRequiredWithoutSubCategoriesNestedInputObjectSchema } from "./CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput.schema";
import { PaymentUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./PaymentUpdateManyWithoutSubCategoryNestedInput.schema";
import { BalanceUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./BalanceUpdateManyWithoutSubCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateInput> = z
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
    balances: z
      .lazy(() => BalanceUpdateManyWithoutSubCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryUpdateInputObjectSchema = Schema;
