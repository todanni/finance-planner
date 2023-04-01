import { z } from "zod";
import { BalanceWhereInputObjectSchema } from "./objects/BalanceWhereInput.schema";
import { BalanceOrderByWithAggregationInputObjectSchema } from "./objects/BalanceOrderByWithAggregationInput.schema";
import { BalanceScalarWhereWithAggregatesInputObjectSchema } from "./objects/BalanceScalarWhereWithAggregatesInput.schema";
import { BalanceScalarFieldEnumSchema } from "./enums/BalanceScalarFieldEnum.schema";

export const BalanceGroupBySchema = z.object({
  where: BalanceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BalanceOrderByWithAggregationInputObjectSchema,
      BalanceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BalanceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BalanceScalarFieldEnumSchema),
});
