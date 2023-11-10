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
				console.log('checking authorization');
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

				if (
					!user ||
					!(await bcrypt.compare(credentials.password, user.password))
				) {
					return null;
				}

				// check to see if the password is valid
				// const passwordsMatch = await bcrypt.compare(
				// 	credentials.password,
				// 	user.password
				// );

				// if (!passwordsMatch) {
				// 	return null;
				// }

				// return user object if everything is valid
				console.log('this is the user', user);

				console.log('User ID at login:', user.sub);
				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, session }) {
			console.log('jwt callback', { token, user, session });
			// Use 'sub' field as user ID
			if (user && user.sub) {
				token.id = user.sub;
			}

			return token;
		},
		async session({ session, token, user }) {
			console.log('session callback:', { session, token, user });

			// Use 'sub' field from token as the user ID
			if (token && token.sub) {
				session.user.id = token.sub;
			}

			console.log('user id of logged in user:', session.user.id);
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
