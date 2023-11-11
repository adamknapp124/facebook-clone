import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getPosts() {
	const posts = await prisma.post.findMany({
		include: {
			author: true,
		},
	});
	console.log(posts);
}
