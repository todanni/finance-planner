import { z } from "zod";
import { SubCategoryScalarWhereInputObjectSchema } from "./SubCategoryScalarWhereInput.schema";
import { SubCategoryUpdateManyMutationInputObjectSchema } from "./SubCategoryUpdateManyMutationInput.schema";
import { SubCategoryUncheckedUpdateManyWithoutSubCategoriesInputObjectSchema } from "./SubCategoryUncheckedUpdateManyWithoutSubCategoriesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SubCategoryUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => SubCategoryScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SubCategoryUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            SubCategoryUncheckedUpdateManyWithoutSubCategoriesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const SubCategoryUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
