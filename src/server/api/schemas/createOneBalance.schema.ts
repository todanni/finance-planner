import { z } from "zod";
import { BalanceCreateInputObjectSchema } from "./objects/BalanceCreateInput.schema";
import { BalanceUncheckedCreateInputObjectSchema } from "./objects/BalanceUncheckedCreateInput.schema";

export const BalanceCreateOneSchema = z.object({
  data: z.union([
    BalanceCreateInputObjectSchema,
    BalanceUncheckedCreateInputObjectSchema,
  ]),
});
