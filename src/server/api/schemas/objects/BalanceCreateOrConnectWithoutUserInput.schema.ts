import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceCreateWithoutUserInputObjectSchema } from "./BalanceCreateWithoutUserInput.schema";
import { BalanceUncheckedCreateWithoutUserInputObjectSchema } from "./BalanceUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => BalanceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BalanceCreateWithoutUserInputObjectSchema),
      z.lazy(() => BalanceUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const BalanceCreateOrConnectWithoutUserInputObjectSchema = Schema;
