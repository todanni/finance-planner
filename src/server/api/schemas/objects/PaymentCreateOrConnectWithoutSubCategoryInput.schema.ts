import { z } from "zod";
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema";
import { PaymentCreateWithoutSubCategoryInputObjectSchema } from "./PaymentCreateWithoutSubCategoryInput.schema";
import { PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutSubCategoryInput> =
  z
    .object({
      where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PaymentCreateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const PaymentCreateOrConnectWithoutSubCategoryInputObjectSchema = Schema;
