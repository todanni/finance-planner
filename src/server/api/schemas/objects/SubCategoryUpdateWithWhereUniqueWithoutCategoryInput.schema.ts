import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryUpdateWithoutCategoryInputObjectSchema } from "./SubCategoryUpdateWithoutCategoryInput.schema";
import { SubCategoryUncheckedUpdateWithoutCategoryInputObjectSchema } from "./SubCategoryUncheckedUpdateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SubCategoryUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => SubCategoryUncheckedUpdateWithoutCategoryInputObjectSchema
        ),
      ]),
    })
    .strict();

export const SubCategoryUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
