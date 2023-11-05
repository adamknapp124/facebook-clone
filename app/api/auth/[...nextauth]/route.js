import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'jsmith',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// check to see if email and password is valid
				if (!credentials.email || !credentials.password) {
					return null;
				}

				// check to see if the user exists
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});
				if (!user) {
					return null;
				}

				// check to see if the password is valid
				const passwordsMatch = await bcrypt.compare(
					credentials.password,
					user.password
				);

				if (!passwordsMatch) {
					return null;
				}

				// return user object if everything is valid
				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, session }) {
			console.log('jwt callback', { token, user, session });
			return token;
		},
		async session({ session, token, user }) {
			console.log('session callback:', { session, token, user });
			return session;
		},
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
