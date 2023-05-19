/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client';
// import { parse, stringify } from 'csv/sync';
// import * as fs from 'fs';

const prisma = new PrismaClient({
	log: [
		{
			emit: 'event',
			level: 'query',
		},
		{
			emit: 'stdout',
			level: 'error',
		},
		{
			emit: 'stdout',
			level: 'info',
		},
		{
			emit: 'stdout',
			level: 'warn',
		},
	],
});

prisma.$on('query', (e) => {
	console.log('Params: ' + e.params);
	console.log('Duration: ', e.duration, 'ms');
});

// type RawRecord = {
// 	Date: Date;
// 	Name: string;
// 	Category: string;
// 	Amount: number;
// };

async function main() {
	const sums = await prisma.transaction.groupBy({
		by: ['category', 'subCategoryId'],
		where: {
			userId: 'clgqfe8zq0002jz34ofc2dilm',
			createdAt: {
				lte: new Date('2023-04-30'),
				gte: new Date('2023-04-01'),
			},
		},
		_sum: {
			amount: true,
		},
	});

	console.log(sums);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
