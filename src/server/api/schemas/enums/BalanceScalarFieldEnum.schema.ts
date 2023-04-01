import { z } from "zod";

export const BalanceScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "amount",
  "createdAt",
  "endDate",
  "interestRate",
  "name",
  "startDate",
  "subCategoryId",
]);
