import { z } from "zod";
import { SubCategoryCreateWithoutBalancesInputObjectSchema } from "./SubCategoryCreateWithoutBalancesInput.schema";
import { SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutBalancesInput.schema";
import { SubCategoryCreateOrConnectWithoutBalancesInputObjectSchema } from "./SubCategoryCreateOrConnectWithoutBalancesInput.schema";
import { SubCategoryUpsertWithoutBalancesInputObjectSchema } from "./SubCategoryUpsertWithoutBalancesInput.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryUpdateWithoutBalancesInputObjectSchema } from "./SubCategoryUpdateWithoutBalancesInput.schema";
import { SubCategoryUncheckedUpdateWithoutBalancesInputObjectSchema } from "./SubCategoryUncheckedUpdateWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateOneRequiredWithoutBalancesNestedInput> =
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
      upsert: z
        .lazy(() => SubCategoryUpsertWithoutBalancesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SubCategoryUpdateWithoutBalancesInputObjectSchema),
          z.lazy(
            () => SubCategoryUncheckedUpdateWithoutBalancesInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const SubCategoryUpdateOneRequiredWithoutBalancesNestedInputObjectSchema =
  Schema;
