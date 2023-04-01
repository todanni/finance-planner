import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutBalancesInputObjectSchema } from "./UserCreateWithoutBalancesInput.schema";
import { UserUncheckedCreateWithoutBalancesInputObjectSchema } from "./UserUncheckedCreateWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBalancesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutBalancesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBalancesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutBalancesInputObjectSchema = Schema;
