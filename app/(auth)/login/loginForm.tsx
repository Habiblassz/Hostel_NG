"use client";
import Link from "next/link";
import React, { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { loginUser } from "@/lib/user.actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
	const [data, action] = useActionState(loginUser, {
		success: false,
		message: "",
	});

	const router = useRouter();

	useEffect(() => {
		if (data.success) {
			router.refresh();
		}
	}, [data.success, router]);

	const { pending } = useFormStatus();

	return (
		<form className="mt-8 space-y-6" action={action}>
			<div className="space-y-4">
				<div>
					<label
						htmlFor="email-address"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
						Email address
					</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autoComplete="email"
						required
						className="relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-base bg-white dark:bg-gray-700 transition-colors"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						autoComplete="current-password"
						required
						className="relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-base bg-white dark:bg-gray-700 transition-colors"
						placeholder="Enter your password"
					/>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
					/>
					<label
						htmlFor="remember-me"
						className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
						Remember me
					</label>
				</div>

				<div className="text-sm">
					<a
						href="#"
						className="font-medium text-primary hover:text-primary/80 transition-colors">
						Forgot your password?
					</a>
				</div>
			</div>

			<div>
				<button
					type="submit"
					className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:scale-105 shadow-lg">
					{pending ? "Signing in..." : "Sign in"}
				</button>
			</div>

			{!data.success && (
				<div className="mt-4 text-red-600 text-center">{data.message}</div>
			)}

			<div className="text-center">
				<span className="text-sm text-gray-600 dark:text-gray-400">
					Don&apos;t have an account?{" "}
					<Link
						href="/register"
						target="_self"
						className="font-medium text-primary hover:text-primary/80 transition-colors">
						Create one here
					</Link>
				</span>
			</div>
		</form>
	);
}
