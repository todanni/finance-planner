import { z } from "zod";
import { SubCategoryOrderByWithRelationInputObjectSchema } from "./objects/SubCategoryOrderByWithRelationInput.schema";
import { SubCategoryWhereInputObjectSchema } from "./objects/SubCategoryWhereInput.schema";
import { SubCategoryWhereUniqueInputObjectSchema } from "./objects/SubCategoryWhereUniqueInput.schema";
import { SubCategoryScalarFieldEnumSchema } from "./enums/SubCategoryScalarFieldEnum.schema";

export const SubCategoryFindManySchema = z.object({
  orderBy: z
    .union([
      SubCategoryOrderByWithRelationInputObjectSchema,
      SubCategoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SubCategoryWhereInputObjectSchema.optional(),
  cursor: SubCategoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SubCategoryScalarFieldEnumSchema).optional(),
});
