"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getStudentAccessCard(studentId: string) {
	try {
		const accessCard = await prisma.accessCard.findFirst({
			where: {
				studentId,
				status: "ACTIVE",
			},
			include: {
				student: {
					include: {
						user: true,
					},
				},
				hostel: true,
				room: true,
				issuedBy: true,
			},
		});

		return { success: true, data: accessCard };
	} catch (error) {
		console.error("Failed to fetch access card:", error);
		return { success: false, message: "Failed to load access card." };
	}
}

export async function getAllAccessCards() {
	try {
		const accessCards = await prisma.accessCard.findMany({
			include: {
				student: {
					include: {
						user: true,
					},
				},
				hostel: true,
				room: true,
				issuedBy: true,
			},
			orderBy: { issuedAt: "desc" },
		});

		return { success: true, data: accessCards };
	} catch (error) {
		console.error("Failed to fetch access cards:", error);
		return { success: false, message: "Failed to load access cards." };
	}
}

export async function issueAccessCard(formData: {
	studentId: string;
	hostelId: string;
	roomId: string;
	expiryDate: string;
	issuedById: string;
}) {
	try {
		// Generate a simple QR code URL (in production, use a QR code generation service)
		const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=studenthostel-${
			formData.studentId
		}-${Date.now()}`;

		const accessCard = await prisma.accessCard.create({
			data: {
				studentId: formData.studentId,
				hostelId: formData.hostelId,
				roomId: formData.roomId,
				qrCodeUrl,
				expiryDate: new Date(formData.expiryDate),
				issuedById: formData.issuedById,
				status: "ACTIVE",
			},
			include: {
				student: {
					include: {
						user: true,
					},
				},
				hostel: true,
				room: true,
				issuedBy: true,
			},
		});

		// Create notification for student
		await prisma.notification.create({
			data: {
				userId: accessCard.student.userId,
				title: "Access Card Issued",
				message: "Your hostel access card has been issued",
				type: "ACCESS_CARD",
				relatedEntityType: "ACCESS_CARD",
				relatedEntityId: accessCard.id,
			},
		});

		revalidatePath("/admin/access-cards");
		revalidatePath("/student/access-card");

		return {
			success: true,
			message: "Access card issued successfully!",
			data: accessCard,
		};
	} catch (error) {
		console.error("Failed to issue access card:", error);
		return {
			success: false,
			message: "Failed to issue access card. Please try again.",
		};
	}
}
