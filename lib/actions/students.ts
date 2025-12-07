"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAllStudents() {
	try {
		const students = await prisma.student.findMany({
			include: {
				user: true,
				hostel: true,
				roomRequests: {
					include: {
						hostel: true,
					},
				},
				accessCards: {
					include: {
						hostel: true,
						room: true,
					},
				},
			},
			orderBy: { user: { name: "asc" } },
		});

		return { success: true, data: students };
	} catch (error) {
		console.error("Failed to fetch students:", error);
		return { success: false, message: "Failed to load students." };
	}
}

export async function getStudentProfile(userId: string) {
	try {
		const student = await prisma.student.findUnique({
			where: { userId },
			include: {
				user: true,
				hostel: true,
				roomRequests: {
					include: {
						hostel: true,
						assignedRoom: true,
					},
					orderBy: { submittedAt: "desc" },
				},
				accessCards: {
					include: {
						hostel: true,
						room: true,
						issuedBy: true,
					},
					orderBy: { issuedAt: "desc" },
				},
			},
		});

		return { success: true, data: student };
	} catch (error) {
		console.error("Failed to fetch student profile:", error);
		return { success: false, message: "Failed to load student profile." };
	}
}

export async function updateStudentProfile(
	userId: string,
	formData: {
		name?: string;
		email?: string;
		phone?: string;
		emergencyContact?: string;
		address?: string;
	}
) {
	try {
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: formData,
		});

		revalidatePath("/student/profile");

		return {
			success: true,
			message: "Profile updated successfully!",
			data: updatedUser,
		};
	} catch (error) {
		console.error("Failed to update student profile:", error);
		return {
			success: false,
			message: "Failed to update profile. Please try again.",
		};
	}
}
