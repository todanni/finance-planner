import { z } from "zod";
import { PaymentWhereUniqueInputObjectSchema } from "./objects/PaymentWhereUniqueInput.schema";

export const PaymentDeleteOneSchema = z.object({
  where: PaymentWhereUniqueInputObjectSchema,
});
