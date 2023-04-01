import { z } from "zod";
import { PaymentWhereUniqueInputObjectSchema } from "./objects/PaymentWhereUniqueInput.schema";

export const PaymentFindUniqueSchema = z.object({
  where: PaymentWhereUniqueInputObjectSchema,
});
