import { z } from "zod";
import { SubCategoryUpdateWithoutBalancesInputObjectSchema } from "./SubCategoryUpdateWithoutBalancesInput.schema";
import { SubCategoryUncheckedUpdateWithoutBalancesInputObjectSchema } from "./SubCategoryUncheckedUpdateWithoutBalancesInput.schema";
import { SubCategoryCreateWithoutBalancesInputObjectSchema } from "./SubCategoryCreateWithoutBalancesInput.schema";
import { SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutBalancesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpsertWithoutBalancesInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubCategoryUpdateWithoutBalancesInputObjectSchema),
      z.lazy(() => SubCategoryUncheckedUpdateWithoutBalancesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SubCategoryCreateWithoutBalancesInputObjectSchema),
      z.lazy(() => SubCategoryUncheckedCreateWithoutBalancesInputObjectSchema),
    ]),
  })
  .strict();

export const SubCategoryUpsertWithoutBalancesInputObjectSchema = Schema;
