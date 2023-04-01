import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceUpdateWithoutSubCategoryInputObjectSchema } from "./BalanceUpdateWithoutSubCategoryInput.schema";
import { BalanceUncheckedUpdateWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedUpdateWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUpdateWithWhereUniqueWithoutSubCategoryInput> =
  z
    .object({
      where: z.lazy(() => BalanceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BalanceUpdateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => BalanceUncheckedUpdateWithoutSubCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const BalanceUpdateWithWhereUniqueWithoutSubCategoryInputObjectSchema =
  Schema;
