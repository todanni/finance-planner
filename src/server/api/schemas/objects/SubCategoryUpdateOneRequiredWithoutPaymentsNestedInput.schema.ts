import { z } from "zod";
import { SubCategoryCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateWithoutPaymentsInput.schema";
import { SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutPaymentsInput.schema";
import { SubCategoryCreateOrConnectWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateOrConnectWithoutPaymentsInput.schema";
import { SubCategoryUpsertWithoutPaymentsInputObjectSchema } from "./SubCategoryUpsertWithoutPaymentsInput.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryUpdateWithoutPaymentsInputObjectSchema } from "./SubCategoryUpdateWithoutPaymentsInput.schema";
import { SubCategoryUncheckedUpdateWithoutPaymentsInputObjectSchema } from "./SubCategoryUncheckedUpdateWithoutPaymentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateOneRequiredWithoutPaymentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubCategoryCreateWithoutPaymentsInputObjectSchema),
          z.lazy(
            () => SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubCategoryCreateOrConnectWithoutPaymentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SubCategoryUpsertWithoutPaymentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SubCategoryUpdateWithoutPaymentsInputObjectSchema),
          z.lazy(
            () => SubCategoryUncheckedUpdateWithoutPaymentsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const SubCategoryUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema =
  Schema;
