"use server";
import { signIn, signOut } from "@/auth";

export async function loginUser(prevState: unknown, formData: FormData) {
	try {
		const user = {
			email: formData.get("email") as string,
			password: formData.get("password") as string,
		};

		await signIn("credentials", {
			email: user.email,
			password: user.password,
			redirect: false,
		});

		return { success: true, message: "Login successful!" };
	} catch (error) {
		console.error(error);
		return { success: false, message: "Invalid email or password" };
	}
}

export async function logUserOut() {
	await signOut();
}
