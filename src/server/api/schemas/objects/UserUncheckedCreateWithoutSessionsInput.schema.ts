import { z } from "zod";
import { BalanceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./BalanceUncheckedCreateNestedManyWithoutUserInput.schema";
import { PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./PaymentUncheckedCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    balances: z
      .lazy(() => BalanceUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    payments: z
      .lazy(() => PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutSessionsInputObjectSchema = Schema;
