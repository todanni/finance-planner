import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { PaymentUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./PaymentUpdateManyWithoutSubCategoryNestedInput.schema";
import { BalanceUpdateManyWithoutSubCategoryNestedInputObjectSchema } from "./BalanceUpdateManyWithoutSubCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateWithoutCategoryInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    payments: z
      .lazy(() => PaymentUpdateManyWithoutSubCategoryNestedInputObjectSchema)
      .optional(),
    balances: z
      .lazy(() => BalanceUpdateManyWithoutSubCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubCategoryUpdateWithoutCategoryInputObjectSchema = Schema;
