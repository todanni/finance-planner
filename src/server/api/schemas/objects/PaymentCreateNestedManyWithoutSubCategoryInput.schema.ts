import { z } from "zod";
import { PaymentCreateWithoutSubCategoryInputObjectSchema } from "./PaymentCreateWithoutSubCategoryInput.schema";
import { PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubCategoryInput.schema";
import { PaymentCreateOrConnectWithoutSubCategoryInputObjectSchema } from "./PaymentCreateOrConnectWithoutSubCategoryInput.schema";
import { PaymentCreateManySubCategoryInputEnvelopeObjectSchema } from "./PaymentCreateManySubCategoryInputEnvelope.schema";
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutSubCategoryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PaymentCreateWithoutSubCategoryInputObjectSchema),
          z
            .lazy(() => PaymentCreateWithoutSubCategoryInputObjectSchema)
            .array(),
          z.lazy(
            () => PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PaymentCreateOrConnectWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => PaymentCreateOrConnectWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PaymentCreateManySubCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PaymentWhereUniqueInputObjectSchema),
          z.lazy(() => PaymentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PaymentCreateNestedManyWithoutSubCategoryInputObjectSchema =
  Schema;
