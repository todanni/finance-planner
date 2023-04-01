import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./SubCategoryWhereUniqueInput.schema";
import { SubCategoryCreateWithoutCategoryInputObjectSchema } from "./SubCategoryCreateWithoutCategoryInput.schema";
import { SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema } from "./SubCategoryUncheckedCreateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => SubCategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubCategoryCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => SubCategoryUncheckedCreateWithoutCategoryInputObjectSchema
        ),
      ]),
    })
    .strict();

export const SubCategoryCreateOrConnectWithoutCategoryInputObjectSchema =
  Schema;
