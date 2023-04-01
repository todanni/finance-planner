import { z } from "zod";
import { SubCategoryCreateWithoutCategoryInputObjectSchema } from "./SubCategoryCreateWithoutCategoryInput.schema";
import { SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutCategoryInput.schema";
import { SubCategoryCreateOrConnectWithoutCategoryInputObjectSchema } from "./SubCategoryCreateOrConnectWithoutCategoryInput.schema";
import { SubCategoryUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from "./SubCategoryUpsertWithWhereUniqueWithoutCategoryInput.schema";
import { SubCategoryCreateManyCategoryInputEnvelopeObjectSchema } from "./SubCategoryCreateManyCategoryInputEnvelope.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from "./SubCategoryUpdateWithWhereUniqueWithoutCategoryInput.schema";
import { SubCategoryUpdateManyWithWhereWithoutCategoryInputObjectSchema } from "./SubCategoryUpdateManyWithWhereWithoutCategoryInput.schema";
import { SubCategoryScalarWhereInputObjectSchema } from "./SubCategoryScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateManyWithoutCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubCategoryCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => SubCategoryCreateWithoutCategoryInputObjectSchema)
            .array(),
          z.lazy(
            () => SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubCategoryCreateOrConnectWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => SubCategoryCreateOrConnectWithoutCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubCategoryUpsertWithWhereUniqueWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                SubCategoryUpsertWithWhereUniqueWithoutCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubCategoryCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubCategoryUpdateWithWhereUniqueWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                SubCategoryUpdateWithWhereUniqueWithoutCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SubCategoryUpdateManyWithWhereWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                SubCategoryUpdateManyWithWhereWithoutCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubCategoryScalarWhereInputObjectSchema),
          z.lazy(() => SubCategoryScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubCategoryUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
