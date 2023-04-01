import { z } from "zod";
import { BalanceCreateManyInputObjectSchema } from "./objects/BalanceCreateManyInput.schema";

export const BalanceCreateManySchema = z.object({
  data: z.union([
    BalanceCreateManyInputObjectSchema,
    z.array(BalanceCreateManyInputObjectSchema),
  ]),
});
