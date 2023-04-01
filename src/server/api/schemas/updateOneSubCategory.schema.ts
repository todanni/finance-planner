import { z } from "zod";
import { SubCategoryUpdateInputObjectSchema } from "./objects/SubCategoryUpdateInput.schema";
import { SubCategoryUncheckedUpdateInputObjectSchema } from "./objects/SubCategoryUncheckedUpdateInput.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./objects/SubCategoryWhereUniqueInput.schema";

export const SubCategoryUpdateOneSchema = z.object({
  data: z.union([
    SubCategoryUpdateInputObjectSchema,
    SubCategoryUncheckedUpdateInputObjectSchema,
  ]),
  where: SubCategoryWhereUniqueInputObjectSchema,
});
