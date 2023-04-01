import { z } from "zod";
import { PaymentWhereUniqueInputObjectSchema } from "./objects/PaymentWhereUniqueInput.schema";
import { PaymentCreateInputObjectSchema } from "./objects/PaymentCreateInput.schema";
import { PaymentUncheckedCreateInputObjectSchema } from "./objects/PaymentUncheckedCreateInput.schema";
import { PaymentUpdateInputObjectSchema } from "./objects/PaymentUpdateInput.schema";
import { PaymentUncheckedUpdateInputObjectSchema } from "./objects/PaymentUncheckedUpdateInput.schema";

export const PaymentUpsertSchema = z.object({
  where: PaymentWhereUniqueInputObjectSchema,
  create: z.union([
    PaymentCreateInputObjectSchema,
    PaymentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PaymentUpdateInputObjectSchema,
    PaymentUncheckedUpdateInputObjectSchema,
  ]),
});
