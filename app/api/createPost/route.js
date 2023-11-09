import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
	const content = await request.json();
	const { body, image, author, publishedAt } = content.data;

	if (!body) {
		return new NextResponse('Title Missing', { status: 400 });
	}

	try {
		const newPost = await prisma.post.create({
			data: {
				body,
				image,
				author,
				publishedAt,
			},
		});
		return NextResponse.json(newPost);
	} catch (error) {
		return new NextResponse('Error creating the post', { status: 500 });
	}
}
