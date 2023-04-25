import { Category } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const categoriesRouter = createTRPCRouter({});
