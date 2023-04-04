import { z } from 'zod';

export const paymentCreateSchema = z.object({
	name: z.string(),
	amount: z.number(),
	endDate: z.date().optional(),
	startDate: z.date().optional(),
	isNet: z.boolean(),
	repeats: z.boolean(),
	repeatsIn: z.number().default(0),
	subCategory: z.object({
		connect: z.object({
			id: z.number().optional(),
		}),
	}),
	user: z.object({
		connect: z.object({
			id: z.string().optional(),
		}),
	}),
});
