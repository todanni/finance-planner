import { z } from "zod";
import { BalanceCreateWithoutSubCategoryInputObjectSchema } from "./BalanceCreateWithoutSubCategoryInput.schema";
import { BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedCreateWithoutSubCategoryInput.schema";
import { BalanceCreateOrConnectWithoutSubCategoryInputObjectSchema } from "./BalanceCreateOrConnectWithoutSubCategoryInput.schema";
import { BalanceCreateManySubCategoryInputEnvelopeObjectSchema } from "./BalanceCreateManySubCategoryInputEnvelope.schema";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUncheckedCreateNestedManyWithoutSubCategoryInput> =
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
      createMany: z
        .lazy(() => BalanceCreateManySubCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BalanceUncheckedCreateNestedManyWithoutSubCategoryInputObjectSchema =
  Schema;
