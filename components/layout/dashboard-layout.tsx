"use client";

import { ReactNode, useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

interface DashboardLayoutProps {
	children: ReactNode;
	user: {
		name: string;
		avatar?: string;
		role: "student" | "admin";
	};
}

export default function DashboardLayout({
	children,
	user,
}: DashboardLayoutProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Close sidebar when route changes on mobile
	useEffect(() => {
		const handleRouteChange = () => {
			if (window.innerWidth < 768) {
				setIsSidebarOpen(false);
			}
		};

		window.addEventListener("resize", handleRouteChange);
		return () => window.removeEventListener("resize", handleRouteChange);
	}, []);

	// Prevent body scroll when sidebar is open on mobile
	useEffect(() => {
		if (isSidebarOpen && window.innerWidth < 768) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isSidebarOpen]);

	return (
		<div className="flex min-h-screen bg-background-light dark:bg-background-dark">
			{/* Sidebar for desktop, overlay for mobile */}
			<div
				className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
				<Sidebar userRole={user.role} onClose={() => setIsSidebarOpen(false)} />
			</div>

			{/* Mobile overlay */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}

			{/* Main content */}
			<div className="flex-1 flex flex-col min-w-0">
				<Navbar
					user={user}
					onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
					isSidebarOpen={isSidebarOpen}
				/>
				<main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
					<div className="max-w-7xl mx-auto w-full">{children}</div>
				</main>
			</div>
		</div>
	);
}
