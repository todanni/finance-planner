import { z } from "zod";
import { BalanceCreateNestedManyWithoutUserInputObjectSchema } from "./BalanceCreateNestedManyWithoutUserInput.schema";
import { PaymentCreateNestedManyWithoutUserInputObjectSchema } from "./PaymentCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    balances: z
      .lazy(() => BalanceCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    payments: z
      .lazy(() => PaymentCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
