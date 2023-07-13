import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

export const txRouter = createTRPCRouter({
	list: protectedProcedure.query(({ ctx }) => {
		return [];
	}),

	add: protectedProcedure.mutation(({ ctx }) => {
		return [];
	}),
});
