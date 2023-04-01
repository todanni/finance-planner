import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryUpdateWithoutCategoryInputObjectSchema } from "./SubCategoryUpdateWithoutCategoryInput.schema";
import { SubCategoryUncheckedUpdateWithoutCategoryInputObjectSchema } from "./SubCategoryUncheckedUpdateWithoutCategoryInput.schema";
import { SubCategoryCreateWithoutCategoryInputObjectSchema } from "./SubCategoryCreateWithoutCategoryInput.schema";
import { SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SubCategoryUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => SubCategoryUncheckedUpdateWithoutCategoryInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => SubCategoryCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema
        ),
      ]),
    })
    .strict();

export const SubCategoryUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
