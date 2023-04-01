import { z } from "zod";
import { BalanceUpdateManyMutationInputObjectSchema } from "./objects/BalanceUpdateManyMutationInput.schema";
import { BalanceWhereInputObjectSchema } from "./objects/BalanceWhereInput.schema";

export const BalanceUpdateManySchema = z.object({
  data: BalanceUpdateManyMutationInputObjectSchema,
  where: BalanceWhereInputObjectSchema.optional(),
});
