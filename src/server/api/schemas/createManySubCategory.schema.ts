import { z } from "zod";
import { SubCategoryCreateManyInputObjectSchema } from "./objects/SubCategoryCreateManyInput.schema";

export const SubCategoryCreateManySchema = z.object({
  data: z.union([
    SubCategoryCreateManyInputObjectSchema,
    z.array(SubCategoryCreateManyInputObjectSchema),
  ]),
});
