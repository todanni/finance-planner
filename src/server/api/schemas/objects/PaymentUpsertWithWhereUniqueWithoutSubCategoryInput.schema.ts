import { z } from "zod";
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema";
import { PaymentUpdateWithoutSubCategoryInputObjectSchema } from "./PaymentUpdateWithoutSubCategoryInput.schema";
import { PaymentUncheckedUpdateWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedUpdateWithoutSubCategoryInput.schema";
import { PaymentCreateWithoutSubCategoryInputObjectSchema } from "./PaymentCreateWithoutSubCategoryInput.schema";
import { PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutSubCategoryInput> =
  z
    .object({
      where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PaymentUpdateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => PaymentUncheckedUpdateWithoutSubCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PaymentCreateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const PaymentUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema =
  Schema;
