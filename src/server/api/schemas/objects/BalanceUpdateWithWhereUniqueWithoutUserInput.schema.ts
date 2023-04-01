import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceUpdateWithoutUserInputObjectSchema } from "./BalanceUpdateWithoutUserInput.schema";
import { BalanceUncheckedUpdateWithoutUserInputObjectSchema } from "./BalanceUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => BalanceWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => BalanceUpdateWithoutUserInputObjectSchema),
      z.lazy(() => BalanceUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const BalanceUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
