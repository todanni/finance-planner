import { z } from "zod";
import { BalanceWhereInputObjectSchema } from "./objects/BalanceWhereInput.schema";

export const BalanceDeleteManySchema = z.object({
  where: BalanceWhereInputObjectSchema.optional(),
});
