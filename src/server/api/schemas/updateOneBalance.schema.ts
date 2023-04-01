import { z } from "zod";
import { BalanceUpdateInputObjectSchema } from "./objects/BalanceUpdateInput.schema";
import { BalanceUncheckedUpdateInputObjectSchema } from "./objects/BalanceUncheckedUpdateInput.schema";
import { BalanceWhereUniqueInputObjectSchema } from "./objects/BalanceWhereUniqueInput.schema";

export const BalanceUpdateOneSchema = z.object({
  data: z.union([
    BalanceUpdateInputObjectSchema,
    BalanceUncheckedUpdateInputObjectSchema,
  ]),
  where: BalanceWhereUniqueInputObjectSchema,
});
