import { z } from "zod";
import { BalanceWhereUniqueInputObjectSchema } from "./objects/BalanceWhereUniqueInput.schema";
import { BalanceCreateInputObjectSchema } from "./objects/BalanceCreateInput.schema";
import { BalanceUncheckedCreateInputObjectSchema } from "./objects/BalanceUncheckedCreateInput.schema";
import { BalanceUpdateInputObjectSchema } from "./objects/BalanceUpdateInput.schema";
import { BalanceUncheckedUpdateInputObjectSchema } from "./objects/BalanceUncheckedUpdateInput.schema";

export const BalanceUpsertSchema = z.object({
  where: BalanceWhereUniqueInputObjectSchema,
  create: z.union([
    BalanceCreateInputObjectSchema,
    BalanceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BalanceUpdateInputObjectSchema,
    BalanceUncheckedUpdateInputObjectSchema,
  ]),
});
