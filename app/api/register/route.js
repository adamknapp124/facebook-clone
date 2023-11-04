import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
	const body = await request.json();
	const { email, password } = body.data;

	if (!email || !password) {
		return new NextResponse('Missing email or password', { status: 400 });
	}
	const exist = await prisma.user.findUnique({
		where: { email: email },
	});
	if (exist) {
		return new NextResponse('User already exists', { status: 400 });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await prisma.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	});

	return NextResponse.json(user);
}
