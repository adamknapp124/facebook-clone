import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
	const body = await request.json();
	const { title, content, image, author, publishedAt } = body.data;

	if (!title) {
		return new NextResponse('Title Missing', { status: 400 });
	}

	try {
		const newPost = await prisma.post.create({
			data: {
				title,
				content,
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
