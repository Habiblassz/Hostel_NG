import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
			<div className="container-responsive py-8 sm:py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
					{/* Brand */}
					<div className="space-y-4">
						<div className="flex items-center justify-center md:justify-start gap-3">
							<div className="w-8 h-8 text-primary">
								<svg
									fill="none"
									viewBox="0 0 48 48"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white">
								Hostel-NG
							</h3>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
							Providing comfortable, secure, and affordable hostel living for
							students since 2020.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
									About
								</Link>
							</li>
							<li>
								<Link
									href="/hostels"
									className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
									Hostels
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
							Contact Us
						</h3>
						<ul className="space-y-2 text-base text-gray-500 dark:text-gray-400">
							<li>123 University Avenue</li>
							<li>College Town, CT 12345</li>
							<li>(+234) 567 890 123</li>
							<li>contact@hostel.ng</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
					<p className="text-sm text-gray-500 dark:text-gray-400">
						© 2025 Hostel-NG. All rights reserved. Designed for students, by
						students.
					</p>
				</div>
			</div>
		</footer>
	);
}
