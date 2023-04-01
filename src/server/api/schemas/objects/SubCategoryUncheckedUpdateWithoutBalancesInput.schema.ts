import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { PaymentUncheckedUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./PaymentUncheckedUpdateManyWithoutSubCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUncheckedUpdateWithoutBalancesInput> =
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
      payments: z
        .lazy(
          () =>
            PaymentUncheckedUpdateManyWithoutSubCategoryNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const SubCategoryUncheckedUpdateWithoutBalancesInputObjectSchema =
  Schema;
