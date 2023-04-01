import { z } from "zod";
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema";
import { PaymentUpdateWithoutSubCategoryInputObjectSchema } from "./PaymentUpdateWithoutSubCategoryInput.schema";
import { PaymentUncheckedUpdateWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedUpdateWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutSubCategoryInput> =
  z
    .object({
      where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PaymentUpdateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => PaymentUncheckedUpdateWithoutSubCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const PaymentUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema =
  Schema;
