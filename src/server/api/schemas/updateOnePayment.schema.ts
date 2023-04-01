import { z } from "zod";
import { PaymentUpdateInputObjectSchema } from "./objects/PaymentUpdateInput.schema";
import { PaymentUncheckedUpdateInputObjectSchema } from "./objects/PaymentUncheckedUpdateInput.schema";
import { PaymentWhereUniqueInputObjectSchema } from "./objects/PaymentWhereUniqueInput.schema";

export const PaymentUpdateOneSchema = z.object({
  data: z.union([
    PaymentUpdateInputObjectSchema,
    PaymentUncheckedUpdateInputObjectSchema,
  ]),
  where: PaymentWhereUniqueInputObjectSchema,
});
