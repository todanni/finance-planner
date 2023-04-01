import { z } from "zod";
import { SubCategoryCreateWithoutCategoryInputObjectSchema } from "./SubCategoryCreateWithoutCategoryInput.schema";
import { SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutCategoryInput.schema";
import { SubCategoryCreateOrConnectWithoutCategoryInputObjectSchema } from "./SubCategoryCreateOrConnectWithoutCategoryInput.schema";
import { SubCategoryCreateManyCategoryInputEnvelopeObjectSchema } from "./SubCategoryCreateManyCategoryInputEnvelope.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUncheckedCreateNestedManyWithoutCategoryInput> =
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
      createMany: z
        .lazy(() => SubCategoryCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
          z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubCategoryUncheckedCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
