import { z } from "zod";
import { PaymentCreateWithoutSubCategoryInputObjectSchema } from "./PaymentCreateWithoutSubCategoryInput.schema";
import { PaymentUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubCategoryInput.schema";
import { PaymentCreateOrConnectWithoutSubCategoryInputObjectSchema } from "./PaymentCreateOrConnectWithoutSubCategoryInput.schema";
import { PaymentUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema } from "./PaymentUpsertWithWhereUniqueWithoutSubCategoryInput.schema";
import { PaymentCreateManySubCategoryInputEnvelopeObjectSchema } from "./PaymentCreateManySubCategoryInputEnvelope.schema";
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema";
import { PaymentUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema } from "./PaymentUpdateWithWhereUniqueWithoutSubCategoryInput.schema";
import { PaymentUpdateManyWithWhereWithoutSubCategoryInputObjectSchema } from "./PaymentUpdateManyWithWhereWithoutSubCategoryInput.schema";
import { PaymentScalarWhereInputObjectSchema } from "./PaymentScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PaymentUpdateManyWithoutSubCategoryNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              PaymentUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PaymentUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PaymentCreateManySubCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PaymentWhereUniqueInputObjectSchema),
          z.lazy(() => PaymentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PaymentWhereUniqueInputObjectSchema),
          z.lazy(() => PaymentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PaymentWhereUniqueInputObjectSchema),
          z.lazy(() => PaymentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PaymentWhereUniqueInputObjectSchema),
          z.lazy(() => PaymentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PaymentUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PaymentUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PaymentUpdateManyWithWhereWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PaymentUpdateManyWithWhereWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PaymentScalarWhereInputObjectSchema),
          z.lazy(() => PaymentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PaymentUpdateManyWithoutSubCategoryNestedInputObjectSchema =
  Schema;
