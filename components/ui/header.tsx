"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	return (
		<header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm ">
			<div className="container-responsive">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center gap-2 md:gap-1">
						<div className="w-8 h-8 text-primary flex-shrink-0">
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
						<h2 className="text-xs md:text-xl font-bold whitespace-nowrap">
							Hostel-NG
						</h2>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						<Link
							href="/"
							className={`text-sm font-medium hover:text-primary transition-colors ${
								pathname === "/" ? "text-primary" : ""
							}`}>
							Home
						</Link>
						<Link
							href="/about"
							className={`text-sm font-medium hover:text-primary transition-colors ${
								pathname === "/about" ? "text-primary" : ""
							}`}>
							About
						</Link>
						<Link
							href="/hostels"
							className={`text-sm font-medium hover:text-primary transition-colors ${
								pathname === "/hostels" ? "text-primary" : ""
							}`}>
							Hostels
						</Link>
						<Link
							href="/contact"
							className={`text-sm font-medium hover:text-primary transition-colors ${
								pathname === "/contact" ? "text-primary" : ""
							}`}>
							Contact
						</Link>
					</nav>

					{/* Right Side Actions */}
					<div className="flex items-center gap-2 sm:gap-3">
						{/* Login Button */}
						<Link
							href="/login"
							className="btn-primary flex items-center justify-center rounded-lg text-xs md:text-base px-3 py-1 md:px-6 md:py-3 font-semibold whitespace-nowrap">
							Login / Register
						</Link>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
							aria-label="Toggle menu">
							<div className="w-6 h-6 flex flex-col justify-center">
								<span
									className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
										isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1.5 ${
										isMobileMenuOpen ? "opacity-0" : "opacity-100"
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out mt-1.5 ${
										isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
									}`}
								/>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
						isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0"
					}`}>
					<nav className="flex flex-col space-y-4 border-t border-gray-200 dark:border-gray-800 pt-4">
						<Link
							href="/"
							className={`text-base font-medium hover:text-primary transition-colors py-2 ${
								pathname === "/" ? "text-primary" : ""
							}`}>
							Home
						</Link>
						<Link
							href="/about"
							className={`text-base font-medium hover:text-primary transition-colors py-2 ${
								pathname === "/about" ? "text-primary" : ""
							}`}>
							About
						</Link>
						<Link
							href="/hostels"
							className={`text-base font-medium hover:text-primary transition-colors py-2 ${
								pathname === "/hostels" ? "text-primary" : ""
							}`}>
							Hostels
						</Link>
						<Link
							href="/contact"
							className={`text-base font-medium hover:text-primary transition-colors py-2 ${
								pathname === "/contact" ? "text-primary" : ""
							}`}>
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
