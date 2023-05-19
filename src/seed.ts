import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// eslint-disable-next-line @typescript-eslint/require-await
async function main() {
	console.log('Start seeding ...');
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
