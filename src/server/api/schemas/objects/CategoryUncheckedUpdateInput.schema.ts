import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { SubCategoryUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from "./SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z
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
    subCategories: z
      .lazy(
        () =>
          SubCategoryUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedUpdateInputObjectSchema = Schema;
