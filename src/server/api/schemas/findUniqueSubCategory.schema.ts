import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./objects/SubCategoryWhereUniqueInput.schema";

export const SubCategoryFindUniqueSchema = z.object({
  where: SubCategoryWhereUniqueInputObjectSchema,
});
