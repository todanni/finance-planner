import { z } from "zod";
import { PaymentCreateInputObjectSchema } from "./objects/PaymentCreateInput.schema";
import { PaymentUncheckedCreateInputObjectSchema } from "./objects/PaymentUncheckedCreateInput.schema";

export const PaymentCreateOneSchema = z.object({
  data: z.union([
    PaymentCreateInputObjectSchema,
    PaymentUncheckedCreateInputObjectSchema,
  ]),
});
