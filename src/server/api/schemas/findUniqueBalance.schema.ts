import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./objects/BalanceWhereUniqueInput.schema";

export const BalanceFindUniqueSchema = z.object({
  where: BalanceWhereUniqueInputObjectSchema,
});
