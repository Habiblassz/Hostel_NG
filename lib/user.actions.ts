"use server";
import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { compare, hash } from "bcryptjs";

export async function loginUser(prevState: unknown, formData: FormData) {
	try {
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		const user = await prisma.user.findFirst({
			where: { email },
		});

		if (!user) {
			console.log("User not found for email:", email);
			return { success: false, message: "User not found" };
		}

		console.log("User found, comparing passwords...");

		const isValidPassword = await compare(password, user.password);
		console.log("Password valid:", isValidPassword);

		if (!isValidPassword) {
			return { success: false, message: "Invalid password" };
		}

		console.log("Password valid, signing in...");

		// Sign in with NextAuth
		await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		return { success: true, message: "Login successful!" };
	} catch (error) {
		console.error(error);
		return { success: false, message: "Invalid email" };
	}
}

export async function registerUser(prevState: unknown, formData: FormData) {
	try {
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const name = formData.get("name") as string;
		const studentId = formData.get("studentId") as string;

		// Check if user already exists
		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			return {
				success: false,
				message: "User already exists with this email.",
			};
		}

		// Hash password
		const hashedPassword = await hash(password, 10);

		// Create user and student record
		const user = await prisma.user.create({
			data: {
				email,
				name,
				password: hashedPassword,
				role: "student",
			},
		});

		await prisma.student.create({
			data: {
				studentId,
				userId: user.id,
			},
		});

		return {
			success: true,
			message: "Registration successful! Please log in.",
		};
	} catch (error) {
		console.error("Registration error:", error);
		return {
			success: false,
			message: "Registration failed. Please try again.",
		};
	}
}

export async function logUserOut() {
	await signOut();
}
