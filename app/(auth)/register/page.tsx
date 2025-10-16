import Link from "next/link";

export const metadata = {
	title: "Register",
};

export default function RegisterPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10">
				<div className="text-center">
					<div className="flex justify-center">
						<div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
							<svg
								fill="none"
								viewBox="0 0 48 48"
								className="w-8 h-8 text-white"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</div>
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
						Create your account
					</h2>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
						Join Hostel-NG and find your perfect student accommodation
					</p>
				</div>

				<form className="mt-8 space-y-6" action="#" method="POST">
					<div className="space-y-4">
						<div>
							<label
								htmlFor="full-name"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Full name
							</label>
							<input
								id="full-name"
								name="name"
								type="text"
								autoComplete="name"
								required
								className="relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-base bg-white dark:bg-gray-700 transition-colors"
								placeholder="Enter your full name"
							/>
						</div>

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
								placeholder="Enter your email address"
							/>
						</div>

						<div>
							<label
								htmlFor="student-id"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Student ID
							</label>
							<input
								id="student-id"
								name="studentId"
								type="text"
								className="relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-base bg-white dark:bg-gray-700 transition-colors"
								placeholder="Enter your student ID"
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
								autoComplete="new-password"
								required
								className="relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-base bg-white dark:bg-gray-700 transition-colors"
								placeholder="Create a password"
							/>
						</div>

						<div>
							<label
								htmlFor="confirm-password"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Confirm Password
							</label>
							<input
								id="confirm-password"
								name="confirm-password"
								type="password"
								autoComplete="new-password"
								required
								className="relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-base bg-white dark:bg-gray-700 transition-colors"
								placeholder="Confirm your password"
							/>
						</div>
					</div>

					<div className="flex items-center">
						<input
							id="agree-terms"
							name="agree-terms"
							type="checkbox"
							className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
							required
						/>
						<label
							htmlFor="agree-terms"
							className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
							I agree to the{" "}
							<a
								href="#"
								className="text-primary hover:text-primary/80 transition-colors">
								Terms and Conditions
							</a>{" "}
							and{" "}
							<a
								href="#"
								className="text-primary hover:text-primary/80 transition-colors">
								Privacy Policy
							</a>
						</label>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:scale-105 shadow-lg">
							Create Account
						</button>
					</div>

					<div className="text-center">
						<span className="text-sm text-gray-600 dark:text-gray-400">
							Already have an account?{" "}
							<Link
								href="/login"
								className="font-medium text-primary hover:text-primary/80 transition-colors">
								Sign in here
							</Link>
						</span>
					</div>
				</form>

				<div className="mt-6">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300 dark:border-gray-600" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
								Or sign up with
							</span>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-2 gap-3">
						<button
							type="button"
							className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.837c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2">GitHub</span>
						</button>

						<button
							type="button"
							className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm-1 16v-6H7v-2h2V7.85a3.5 3.5 0 113 0V8h2v2h-2v6h-2z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2">Facebook</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
