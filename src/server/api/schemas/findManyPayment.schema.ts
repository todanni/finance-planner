import { z } from "zod";
import { PaymentOrderByWithRelationInputObjectSchema } from "./objects/PaymentOrderByWithRelationInput.schema";
import { PaymentWhereInputObjectSchema } from "./objects/PaymentWhereInput.schema";
import { PaymentWhereUniqueInputObjectSchema } from "./objects/PaymentWhereUniqueInput.schema";
import { PaymentScalarFieldEnumSchema } from "./enums/PaymentScalarFieldEnum.schema";

export const PaymentFindManySchema = z.object({
  orderBy: z
    .union([
      PaymentOrderByWithRelationInputObjectSchema,
      PaymentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PaymentWhereInputObjectSchema.optional(),
  cursor: PaymentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PaymentScalarFieldEnumSchema).optional(),
});
