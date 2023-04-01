import { z } from "zod";
import { BalanceCreateWithoutSubCategoryInputObjectSchema } from "./BalanceCreateWithoutSubCategoryInput.schema";
import { BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedCreateWithoutSubCategoryInput.schema";
import { BalanceCreateOrConnectWithoutSubCategoryInputObjectSchema } from "./BalanceCreateOrConnectWithoutSubCategoryInput.schema";
import { BalanceUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema } from "./BalanceUpsertWithWhereUniqueWithoutSubCategoryInput.schema";
import { BalanceCreateManySubCategoryInputEnvelopeObjectSchema } from "./BalanceCreateManySubCategoryInputEnvelope.schema";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema } from "./BalanceUpdateWithWhereUniqueWithoutSubCategoryInput.schema";
import { BalanceUpdateManyWithWhereWithoutSubCategoryInputObjectSchema } from "./BalanceUpdateManyWithWhereWithoutSubCategoryInput.schema";
import { BalanceScalarWhereInputObjectSchema } from "./BalanceScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUncheckedUpdateManyWithoutSubCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BalanceCreateWithoutSubCategoryInputObjectSchema),
          z
            .lazy(() => BalanceCreateWithoutSubCategoryInputObjectSchema)
            .array(),
          z.lazy(
            () => BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BalanceCreateOrConnectWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => BalanceCreateOrConnectWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BalanceUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                BalanceUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BalanceCreateManySubCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BalanceUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                BalanceUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BalanceUpdateManyWithWhereWithoutSubCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                BalanceUpdateManyWithWhereWithoutSubCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BalanceScalarWhereInputObjectSchema),
          z.lazy(() => BalanceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BalanceUncheckedUpdateManyWithoutSubCategoryNestedInputObjectSchema =
  Schema;
