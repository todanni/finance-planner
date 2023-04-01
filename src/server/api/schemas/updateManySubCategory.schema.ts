import { z } from "zod";
import { SubCategoryUpdateManyMutationInputObjectSchema } from "./objects/SubCategoryUpdateManyMutationInput.schema";
import { SubCategoryWhereInputObjectSchema } from "./objects/SubCategoryWhereInput.schema";

export const SubCategoryUpdateManySchema = z.object({
  data: SubCategoryUpdateManyMutationInputObjectSchema,
  where: SubCategoryWhereInputObjectSchema.optional(),
});
