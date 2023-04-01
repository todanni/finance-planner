import { z } from "zod";
import { UserUpdateWithoutBalancesInputObjectSchema } from "./UserUpdateWithoutBalancesInput.schema";
import { UserUncheckedUpdateWithoutBalancesInputObjectSchema } from "./UserUncheckedUpdateWithoutBalancesInput.schema";
import { UserCreateWithoutBalancesInputObjectSchema } from "./UserCreateWithoutBalancesInput.schema";
import { UserUncheckedCreateWithoutBalancesInputObjectSchema } from "./UserUncheckedCreateWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutBalancesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutBalancesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutBalancesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutBalancesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBalancesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutBalancesInputObjectSchema = Schema;
