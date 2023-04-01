import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./BalanceWhereUniqueInput.schema";
import { BalanceCreateWithoutSubCategoryInputObjectSchema } from "./BalanceCreateWithoutSubCategoryInput.schema";
import { BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema } from "./BalanceUncheckedCreateWithoutSubCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceCreateOrConnectWithoutSubCategoryInput> =
  z
    .object({
      where: z.lazy(() => BalanceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BalanceCreateWithoutSubCategoryInputObjectSchema),
        z.lazy(() => BalanceUncheckedCreateWithoutSubCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const BalanceCreateOrConnectWithoutSubCategoryInputObjectSchema = Schema;
