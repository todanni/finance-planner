import { z } from "zod";
import { BalanceCreateWithoutUserInputObjectSchema } from "./BalanceCreateWithoutUserInput.schema";
import { BalanceUncheckedCreateWithoutUserInputObjectSchema } from "./BalanceUncheckedCreateWithoutUserInput.schema";
import { BalanceCreateOrConnectWithoutUserInputObjectSchema } from "./BalanceCreateOrConnectWithoutUserInput.schema";
import { BalanceCreateManyUserInputEnvelopeObjectSchema } from "./BalanceCreateManyUserInputEnvelope.schema";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => BalanceCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => BalanceWhereUniqueInputObjectSchema),
        z.lazy(() => BalanceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BalanceCreateNestedManyWithoutUserInputObjectSchema = Schema;
