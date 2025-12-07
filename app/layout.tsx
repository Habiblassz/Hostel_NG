import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/SessionProvider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-display",
});

export const metadata: Metadata = {
	title: {
		template: `%s | Hostel-NG`,
		default: "Hostel-NG",
	},
	description:
		"Find your perfect student accommodation with us, offering a safe and friendly environment.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable} suppressHydrationWarning>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
					rel="stylesheet"
				/>
			</head>
			<body className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
				<div className="flex flex-col min-h-screen">
					<AuthProvider>{children}</AuthProvider>
				</div>
			</body>
		</html>
	);
}
