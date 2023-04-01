import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./objects/SubCategoryWhereUniqueInput.schema";

export const SubCategoryDeleteOneSchema = z.object({
  where: SubCategoryWhereUniqueInputObjectSchema,
});
