import { z } from "zod";
import { PaymentUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedCreateNestedManyWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUncheckedCreateWithoutBalancesInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      categoryId: z.number(),
      payments: z
        .lazy(
          () =>
            PaymentUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema =
  Schema;
