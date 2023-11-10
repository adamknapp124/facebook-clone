import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
	const content = await request.json();
	const { body, image, authorId } = content.data;

	if (!body) {
		return new NextResponse('Title Missing', { status: 400 });
	}

	try {
		// console.log(session.user.name);
		const newPost = await prisma.post.create({
			data: {
				body,
				image,
				// publishedAt,
				// author,
				authorId,
			},
		});
		return NextResponse.json(newPost);
	} catch (error) {
		console.log('error: ' + error);
		return new NextResponse('Error creating the post', { status: 500 });
	}
}
