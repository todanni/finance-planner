import { z } from "zod";
import { BalanceCreateWithoutUserInputObjectSchema } from "./BalanceCreateWithoutUserInput.schema";
import { BalanceUncheckedCreateWithoutUserInputObjectSchema } from "./BalanceUncheckedCreateWithoutUserInput.schema";
import { BalanceCreateOrConnectWithoutUserInputObjectSchema } from "./BalanceCreateOrConnectWithoutUserInput.schema";
import { BalanceUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./BalanceUpsertWithWhereUniqueWithoutUserInput.schema";
import { BalanceCreateManyUserInputEnvelopeObjectSchema } from "./BalanceCreateManyUserInputEnvelope.schema";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./BalanceUpdateWithWhereUniqueWithoutUserInput.schema";
import { BalanceUpdateManyWithWhereWithoutUserInputObjectSchema } from "./BalanceUpdateManyWithWhereWithoutUserInput.schema";
import { BalanceScalarWhereInputObjectSchema } from "./BalanceScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BalanceCreateWithoutUserInputObjectSchema),
        z.lazy(() => BalanceCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => BalanceUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => BalanceUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => BalanceCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => BalanceCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => BalanceUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => BalanceUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => BalanceCreateManyUserInputEnvelopeObjectSchema)
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
        z.lazy(() => BalanceUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => BalanceUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => BalanceUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => BalanceUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const BalanceUpdateManyWithoutUserNestedInputObjectSchema = Schema;
