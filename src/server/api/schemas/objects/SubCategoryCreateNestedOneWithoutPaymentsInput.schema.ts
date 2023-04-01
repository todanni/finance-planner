import { z } from "zod";
import { SubCategoryCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateWithoutPaymentsInput.schema";
import { SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutPaymentsInput.schema";
import { SubCategoryCreateOrConnectWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateOrConnectWithoutPaymentsInput.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateNestedOneWithoutPaymentsInput> =
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
      connect: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SubCategoryCreateNestedOneWithoutPaymentsInputObjectSchema =
  Schema;
