import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 3,
		updateAge: 24 * 60 * 60,
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			id: "credentials",
			name: "credentials",
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials, req) => {
				const user = await fetch(
					`${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
							accept: "application/json",
						},
						body: new URLSearchParams(credentials).toString(),
					}
				)
					.then((res) => res.json())
					.catch((err) => {
						return null;
					});

				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	secret: process.env.NEXT_AUTH_SECRET,
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		error: "/auth/error", // Error code passed in query string as ?error=
		newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
	},
});
