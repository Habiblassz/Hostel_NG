import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "./data/users";
import type { NextAuthConfig } from "next-auth";
// import { compareSync } from "bcrypt-ts-edge";

declare module "next-auth" {
	interface User {
		role?: string;
	}

	interface Session {
		user: {
			id?: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
			role?: string;
		};
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		role?: string;
	}
}

export const config = {
	pages: {
		signIn: "/login",
		error: "/login",
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60,
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				console.log(credentials);
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Please fill in all fields.");
				}

				const user = users.find((u) => credentials.email === u.email);

				if (!user) {
					console.log("No user found with this email.");
					throw new Error("No user found with this email.");
				}

				if (user.password !== credentials.password) {
					console.log("Error: Invalid email or password");
					throw new Error("Error: Invalid email or password");
				}

				// if (user && user.password) {
				// const isMatch = compareSync(credentials.password, user.password);

				// if (isMatch) {
				return {
					id: user.id,
					name: user.name,
					email: user.email,
					role: user.role,
				};
				// 	}
				// 	return null;
				// }
			},
		}),
	],
	callbacks: {
		async session({ session, user, trigger, token }: any) {
			// console.log("session callback - token: ", token); // debigging
			// console.log("session callback - session before: ", session); // debigging
			// console.log("session callback - user: ", user); // debigging
			session.user.id = token.sub;
			session.user.role = token.role;
			if (trigger === "update" && token) {
				session.user.name = user.name;
			}
			return session;
		},
		async jwt({ user, token }: any) {
			// console.log("jwt callback - user: ", user); // debigging
			// console.log("jwt callback - token: ", token); // debugging
			if (user) {
				token.role = user.role;
			}
			return token;
		},
	},
	debug: process.env.NODE_ENV === "development",
	secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
