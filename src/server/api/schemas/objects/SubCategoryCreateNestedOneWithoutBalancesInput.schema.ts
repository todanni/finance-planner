import { z } from "zod";
import { SubCategoryCreateWithoutBalancesInputObjectSchema } from "./SubCategoryCreateWithoutBalancesInput.schema";
import { SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutBalancesInput.schema";
import { SubCategoryCreateOrConnectWithoutBalancesInputObjectSchema } from "./SubCategoryCreateOrConnectWithoutBalancesInput.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateNestedOneWithoutBalancesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubCategoryCreateWithoutBalancesInputObjectSchema),
          z.lazy(
            () => SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubCategoryCreateOrConnectWithoutBalancesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SubCategoryCreateNestedOneWithoutBalancesInputObjectSchema =
  Schema;
