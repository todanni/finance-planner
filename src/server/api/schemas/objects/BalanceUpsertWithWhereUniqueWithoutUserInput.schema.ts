import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceUpdateWithoutUserInputObjectSchema } from "./BalanceUpdateWithoutUserInput.schema";
import { BalanceUncheckedUpdateWithoutUserInputObjectSchema } from "./BalanceUncheckedUpdateWithoutUserInput.schema";
import { BalanceCreateWithoutUserInputObjectSchema } from "./BalanceCreateWithoutUserInput.schema";
import { BalanceUncheckedCreateWithoutUserInputObjectSchema } from "./BalanceUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => BalanceWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => BalanceUpdateWithoutUserInputObjectSchema),
      z.lazy(() => BalanceUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BalanceCreateWithoutUserInputObjectSchema),
      z.lazy(() => BalanceUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const BalanceUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
