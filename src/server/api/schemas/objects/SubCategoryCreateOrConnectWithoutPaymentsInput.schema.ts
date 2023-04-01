import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateWithoutPaymentsInput.schema";
import { SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutPaymentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateOrConnectWithoutPaymentsInput> =
  z
    .object({
      where: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubCategoryCreateWithoutPaymentsInputObjectSchema),
        z.lazy(
          () => SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const SubCategoryCreateOrConnectWithoutPaymentsInputObjectSchema =
  Schema;
