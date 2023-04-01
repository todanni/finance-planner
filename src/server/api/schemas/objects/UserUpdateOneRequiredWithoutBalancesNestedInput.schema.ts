import { z } from "zod";
import { UserCreateWithoutBalancesInputObjectSchema } from "./UserCreateWithoutBalancesInput.schema";
import { UserUncheckedCreateWithoutBalancesInputObjectSchema } from "./UserUncheckedCreateWithoutBalancesInput.schema";
import { UserCreateOrConnectWithoutBalancesInputObjectSchema } from "./UserCreateOrConnectWithoutBalancesInput.schema";
import { UserUpsertWithoutBalancesInputObjectSchema } from "./UserUpsertWithoutBalancesInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutBalancesInputObjectSchema } from "./UserUpdateWithoutBalancesInput.schema";
import { UserUncheckedUpdateWithoutBalancesInputObjectSchema } from "./UserUncheckedUpdateWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBalancesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBalancesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutBalancesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutBalancesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutBalancesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutBalancesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutBalancesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBalancesNestedInputObjectSchema =
  Schema;
