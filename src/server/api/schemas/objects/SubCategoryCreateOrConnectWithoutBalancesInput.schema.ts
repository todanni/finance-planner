import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryCreateWithoutBalancesInputObjectSchema } from "./SubCategoryCreateWithoutBalancesInput.schema";
import { SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateOrConnectWithoutBalancesInput> =
  z
    .object({
      where: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubCategoryCreateWithoutBalancesInputObjectSchema),
        z.lazy(
          () => SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const SubCategoryCreateOrConnectWithoutBalancesInputObjectSchema =
  Schema;
