"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAllStaff() {
	try {
		const staff = await prisma.staff.findMany({
			include: {
				user: true,
			},
			orderBy: { user: { name: "asc" } },
		});

		return { success: true, data: staff };
	} catch (error) {
		console.error("Failed to fetch staff:", error);
		return { success: false, message: "Failed to load staff." };
	}
}

export async function toggleStaffStatus(staffId: string) {
	try {
		const staff = await prisma.staff.findUnique({
			where: { id: staffId },
			include: { user: true },
		});

		if (!staff) {
			return { success: false, message: "Staff member not found." };
		}

		const newStatus = staff.user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

		await prisma.user.update({
			where: { id: staff.userId },
			data: { status: newStatus },
		});

		revalidatePath("/admin/staff");

		return {
			success: true,
			message: `Staff member ${newStatus.toLowerCase()} successfully!`,
		};
	} catch (error) {
		console.error("Failed to toggle staff status:", error);
		return {
			success: false,
			message: "Failed to update staff status. Please try again.",
		};
	}
}
