import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { auth } from "@/auth";

interface LayoutProps {
	children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
	const avatarUrl =
		"https://lh3.googleusercontent.com/aida-public/AB6AXuAGa80-4xnBQck8M-p5zJDygpRsuyU7rMY9E-KhmToaZqTpAh4ql9bgLvvLqYCUCZdbfzADq0pEfih_gSMPyQgDSEKhE6NFIj7NSR3_NQ9Gb85kEsqE43mjAIuKsDsPmHV86kzOWvxDcsIEtqG5kgMwHpe1X53BO6M3EraxFDWFiw0mdRMr2mfbIruns0G2jHJ40dAYk70ewzaK1beGml7-SVeacvoZTMaQq5iPKygxfpwVmw46DHKBwfShs9HP9dI3dykbAWYSSQE";

	const session = await auth();
	const user = {
		name: session?.user?.name || "User",
		email: session?.user?.email || "",
		role: session?.user?.role as "student" | "admin",
		avatar: avatarUrl,
	};
	return <DashboardLayout user={user}>{children}</DashboardLayout>;
}
