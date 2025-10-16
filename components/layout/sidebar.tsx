"use client";

import { logUserOut } from "@/lib/user.actions";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
	userRole: "student" | "admin";
	onClose?: () => void;
}

const studentMenu = [
	{ name: "Dashboard", href: "/student/dashboard", icon: "dashboard" },
	{ name: "Request Room", href: "/student/room-request", icon: "add_circle" },
	{ name: "My Access Card", href: "/student/access-card", icon: "credit_card" },
	{ name: "Hostel Updates", href: "/student/updates", icon: "notifications" },
	{ name: "Profile", href: "/student/profile", icon: "person" },
];

const adminMenu = [
	{ name: "Dashboard", href: "/admin/dashboard", icon: "dashboard" },
	{ name: "Student Requests", href: "/admin/requests", icon: "list_alt" },
	{ name: "Students", href: "/admin/students", icon: "people" },
	{ name: "Access Cards", href: "/admin/access-cards", icon: "credit_card" },
	{ name: "Staff", href: "/admin/staff", icon: "people" },
	{ name: "Posts", href: "/admin/posts", icon: "article" },
];

export default function Sidebar({ userRole, onClose }: SidebarProps) {
	const pathname = usePathname();
	const menuItems = userRole === "student" ? studentMenu : adminMenu;

	const handleLogout = async () => {
		try {
			await logUserOut();
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<aside className="w-64 bg-white dark:bg-background-dark h-full flex flex-col border-r border-gray-200 dark:border-gray-800 lg:border-0">
			{/* Header */}
			<div className="p-4 border-b border-gray-200 dark:border-gray-800 lg:p-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
							school
						</span>
						<div>
							<h1 className="text-lg font-bold text-slate-800 dark:text-white">
								StudentHostel
							</h1>
							<p className="text-xs text-slate-600 dark:text-slate-400 capitalize">
								{userRole}
							</p>
						</div>
					</div>
					{/* Close button for mobile */}
					<button
						onClick={onClose}
						className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
						aria-label="Close menu">
						<span className="material-symbols-outlined text-lg">close</span>
					</button>
				</div>
			</div>

			{/* Navigation */}
			<nav className="flex-1 p-4 lg:p-6 overflow-y-auto">
				<div className="space-y-2">
					{menuItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => {
								if (window.innerWidth < 1024) {
									onClose?.();
								}
							}}
							className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-base ${
								pathname === item.href
									? "bg-primary/10 dark:bg-primary/20 text-primary font-semibold"
									: "text-slate-600 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary"
							}`}>
							<span className="material-symbols-outlined text-xl">
								{item.icon}
							</span>
							<span>{item.name}</span>
						</Link>
					))}
				</div>
			</nav>

			{/* Footer */}
			<div
				className="p-4 border-t border-gray-200 dark:border-gray-800 lg:p-6"
				onClick={handleLogout}>
				<button className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-base">
					<span className="material-symbols-outlined text-xl">logout</span>
					<span className="font-medium">Logout</span>
				</button>
			</div>
		</aside>
	);
}
