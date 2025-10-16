"use client";

import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
	user?: {
		name: string;
		avatar?: string;
		role: "student" | "admin";
	};
	onMenuToggle: () => void;
	isSidebarOpen: boolean;
}

export default function Navbar({
	user,
	onMenuToggle,
	isSidebarOpen,
}: NavbarProps) {
	const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
	return (
		<header className="sticky top-0 z-40 flex h-23 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 sm:px-6 safe-area-inset-top">
			<div className="flex items-center gap-4">
				{/* Mobile menu button */}
				<button
					onClick={onMenuToggle}
					className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
					aria-label="Toggle menu">
					<div className="w-6 h-6 flex flex-col justify-center">
						<span
							className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
								isSidebarOpen ? "rotate-45 translate-y-1.5" : ""
							}`}
						/>
						<span
							className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1.5 ${
								isSidebarOpen ? "opacity-0" : "opacity-100"
							}`}
						/>
						<span
							className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out mt-1.5 ${
								isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
							}`}
						/>
					</div>
				</button>

				<div className="flex items-center gap-2 text-primary">
					<span className="material-symbols-outlined text-xl sm:text-2xl hidden sm:block">
						school
					</span>
					<h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
						{user?.name || "Student Housing"}
					</h2>
				</div>
			</div>

			<div className="flex items-center gap-2 sm:gap-4">
				{/* Notifications */}
				<div className="relative">
					<button
						onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
						className="relative p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
						aria-label="Notifications">
						<span className="material-symbols-outlined text-xl">
							notifications
						</span>
						<span className="absolute -top-1 -right-1 flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
						</span>
					</button>
				</div>

				{/* User avatar */}
				{user && (
					<div className="flex-shrink-0">
						<Image
							alt="User profile"
							className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-primary/20"
							src={user.avatar || "/default-avatar.png"}
							width={100}
							height={100}
						/>
					</div>
				)}
			</div>
		</header>
	);
}
