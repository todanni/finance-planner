import { z } from "zod";
import { BalanceScalarWhereInputObjectSchema } from "./BalanceScalarWhereInput.schema";
import { BalanceUpdateManyMutationInputObjectSchema } from "./BalanceUpdateManyMutationInput.schema";
import { BalanceUncheckedUpdateManyWithoutBalancesInputObjectSchema } from "./BalanceUncheckedUpdateManyWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BalanceUpdateManyWithWhereWithoutSubCategoryInput> =
  z
    .object({
      where: z.lazy(() => BalanceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BalanceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => BalanceUncheckedUpdateManyWithoutBalancesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const BalanceUpdateManyWithWhereWithoutSubCategoryInputObjectSchema =
  Schema;
