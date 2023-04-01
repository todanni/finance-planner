import { z } from "zod";

export const PaymentScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "amount",
  "createdAt",
  "name",
  "startDate",
  "endDate",
  "repeats",
  "repeatsIn",
  "subCategoryId",
]);
