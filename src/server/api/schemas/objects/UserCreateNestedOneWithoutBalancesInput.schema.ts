import { z } from "zod";
import { UserCreateWithoutBalancesInputObjectSchema } from "./UserCreateWithoutBalancesInput.schema";
import { UserUncheckedCreateWithoutBalancesInputObjectSchema } from "./UserUncheckedCreateWithoutBalancesInput.schema";
import { UserCreateOrConnectWithoutBalancesInputObjectSchema } from "./UserCreateOrConnectWithoutBalancesInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBalancesInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutBalancesInputObjectSchema = Schema;
