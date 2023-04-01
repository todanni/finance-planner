import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./objects/BalanceWhereUniqueInput.schema";

export const BalanceDeleteOneSchema = z.object({
  where: BalanceWhereUniqueInputObjectSchema,
});
