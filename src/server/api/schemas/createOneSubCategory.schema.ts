import { z } from "zod";
import { SubCategoryCreateInputObjectSchema } from "./objects/SubCategoryCreateInput.schema";
import { SubCategoryUncheckedCreateInputObjectSchema } from "./objects/SubCategoryUncheckedCreateInput.schema";

export const SubCategoryCreateOneSchema = z.object({
  data: z.union([
    SubCategoryCreateInputObjectSchema,
    SubCategoryUncheckedCreateInputObjectSchema,
  ]),
});
