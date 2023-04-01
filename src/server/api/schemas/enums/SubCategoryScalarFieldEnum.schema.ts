import { z } from "zod";

export const SubCategoryScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "categoryId",
]);
