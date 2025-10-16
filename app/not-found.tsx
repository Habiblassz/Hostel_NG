import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4">
			<div className="text-center">
				<div className="text-6xl font-bold text-primary mb-4">404</div>
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
					Page Not Found
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
					Sorry, we couldn&apos;t find the page you&apos;re looking for. The
					page might have been moved or doesn&apos;t exist.
				</p>
				<div className="space-x-4">
					<Link
						href="/"
						className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
						Go back home
					</Link>
					<Link
						href="/hostels"
						className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
						Browse Hostels
					</Link>
				</div>
			</div>
		</div>
	);
}
