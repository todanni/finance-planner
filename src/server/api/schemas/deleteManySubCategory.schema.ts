import { z } from "zod";
import { SubCategoryWhereInputObjectSchema } from "./objects/SubCategoryWhereInput.schema";

export const SubCategoryDeleteManySchema = z.object({
  where: SubCategoryWhereInputObjectSchema.optional(),
});
