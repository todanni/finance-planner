import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceUpdateWithoutSubCategoryInputObjectSchema } from "./BalanceUpdateWithoutSubCategoryInput.schema";
import { BalanceUncheckedUpdateWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedUpdateWithoutSubCategoryInput.schema";
import { BalanceCreateWithoutSubCategoryInputObjectSchema } from "./BalanceCreateWithoutSubCategoryInput.schema";
import { BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedCreateWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUpsertWithWhereUniqueWithoutSubCategoryInput> =
  z
    .object({
      where: z.lazy(() => BalanceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BalanceUpdateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => BalanceUncheckedUpdateWithoutSubCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BalanceCreateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const BalanceUpsertWithWhereUniqueWithoutSubCategoryInputObjectSchema =
  Schema;
