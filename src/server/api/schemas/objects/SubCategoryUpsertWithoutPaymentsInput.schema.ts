import { z } from "zod";
import { SubCategoryUpdateWithoutPaymentsInputObjectSchema } from "./SubCategoryUpdateWithoutPaymentsInput.schema";
import { SubCategoryUncheckedUpdateWithoutPaymentsInputObjectSchema } from "./SubCategoryUncheckedUpdateWithoutPaymentsInput.schema";
import { SubCategoryCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryCreateWithoutPaymentsInput.schema";
import { SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutPaymentsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpsertWithoutPaymentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubCategoryUpdateWithoutPaymentsInputObjectSchema),
      z.lazy(() => SubCategoryUncheckedUpdateWithoutPaymentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SubCategoryCreateWithoutPaymentsInputObjectSchema),
      z.lazy(() => SubCategoryUncheckedCreateWithoutPaymentsInputObjectSchema),
    ]),
  })
  .strict();

export const SubCategoryUpsertWithoutPaymentsInputObjectSchema = Schema;
