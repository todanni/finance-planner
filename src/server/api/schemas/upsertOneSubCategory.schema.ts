import { z } from "zod";
import { SubCategoryWhereUniqueInputObjectSchema } from "./objects/SubCategoryWhereUniqueInput.schema";
import { SubCategoryCreateInputObjectSchema } from "./objects/SubCategoryCreateInput.schema";
import { SubCategoryUncheckedCreateInputObjectSchema } from "./objects/SubCategoryUncheckedCreateInput.schema";
import { SubCategoryUpdateInputObjectSchema } from "./objects/SubCategoryUpdateInput.schema";
import { SubCategoryUncheckedUpdateInputObjectSchema } from "./objects/SubCategoryUncheckedUpdateInput.schema";

export const SubCategoryUpsertSchema = z.object({
  where: SubCategoryWhereUniqueInputObjectSchema,
  create: z.union([
    SubCategoryCreateInputObjectSchema,
    SubCategoryUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SubCategoryUpdateInputObjectSchema,
    SubCategoryUncheckedUpdateInputObjectSchema,
  ]),
});
