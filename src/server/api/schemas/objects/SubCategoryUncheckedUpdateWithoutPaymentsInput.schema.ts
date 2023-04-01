import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { BalanceUncheckedUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./BalanceUncheckedUpdateManyWithoutSubCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUncheckedUpdateWithoutPaymentsInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      categoryId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      balances: z
        .lazy(
          () =>
            BalanceUncheckedUpdateManyWithoutSubCategoryNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const SubCategoryUncheckedUpdateWithoutPaymentsInputObjectSchema =
  Schema;
