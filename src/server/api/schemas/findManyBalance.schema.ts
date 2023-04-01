import { z } from "zod";
import { BalanceOrderByWithRelationInputObjectSchema } from "./objects/BalanceOrderByWithRelationInput.schema";
import { BalanceWhereInputObjectSchema } from "./objects/BalanceWhereInput.schema";
import { BalanceWhereUniqueInputObjectSchema } from "./objects/BalanceWhereUniqueInput.schema";
import { BalanceScalarFieldEnumSchema } from "./enums/BalanceScalarFieldEnum.schema";

export const BalanceFindManySchema = z.object({
  orderBy: z
    .union([
      BalanceOrderByWithRelationInputObjectSchema,
      BalanceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BalanceWhereInputObjectSchema.optional(),
  cursor: BalanceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BalanceScalarFieldEnumSchema).optional(),
});
