import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { CategoryUpdateOneRequiredWithoutSubCategoriesNestedInputObjectSchema } from "./CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput.schema";
import { BalanceUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./BalanceUpdateManyWithoutSubCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateWithoutPaymentsInput> = z
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
    balances: z
      .lazy(() => BalanceUpdateManyWithoutSubCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryUpdateWithoutPaymentsInputObjectSchema = Schema;
