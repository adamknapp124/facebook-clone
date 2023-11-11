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
				console.log('***Authorizing');

				// check to see if email and password is valid
				if (!credentials.email || !credentials.password) {
					return null;
				}

				// query the database for the user
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
					include: {
						posts: true,
					},
				});

				// check if user exists AND the password is valid
				if (
					!user ||
					!(await bcrypt.compare(credentials.password, user.password))
				) {
					return null;
				}

				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, session, account }) {
			console.log('jwt callback', { token, user, session });

			if (user) {
				return {
					...token,
					id: user.id,
					posts: user.posts,
				};
			}

			return token;
		},
		async session({ session, token, user }) {
			console.log('session callback:', { session, token, user });
			console.log('***Authorized user:', token.id);

			// Log user posts to the console
			console.log('User posts:', token.posts.length);

			return {
				...session,
				user: {
					...session.user,
					id: token.id,
					posts: token.posts,
				},
			};
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
