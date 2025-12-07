"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createRoomRequest(formData: {
	studentId: string;
	hostelId: string;
	roomType: string;
	sessionDuration: string;
}) {
	try {
		const roomRequest = await prisma.roomRequest.create({
			data: {
				studentId: formData.studentId,
				hostelId: formData.hostelId,
				roomType: formData.roomType,
				sessionDuration: formData.sessionDuration,
				status: "PENDING",
			},
			include: {
				student: {
					include: {
						user: true,
					},
				},
				hostel: true,
			},
		});

		// Create notification for admin
		await prisma.notification.create({
			data: {
				userId: formData.studentId, // This would be admin user ID in real scenario
				title: "New Room Request",
				message: `New room request from ${roomRequest.student.user.name}`,
				type: "REQUEST_UPDATE",
				relatedEntityType: "ROOM_REQUEST",
				relatedEntityId: roomRequest.id,
			},
		});

		revalidatePath("/student/dashboard");
		revalidatePath("/admin/requests");

		return {
			success: true,
			message: "Room request submitted successfully!",
			data: roomRequest,
		};
	} catch (error) {
		console.error("Failed to create room request:", error);
		return {
			success: false,
			message: "Failed to submit room request. Please try again.",
		};
	}
}

export async function getStudentRoomRequests(studentId: string) {
	try {
		const requests = await prisma.roomRequest.findMany({
			where: { studentId },
			include: {
				hostel: true,
				assignedRoom: true,
				assignedStaff: {
					include: {
						user: true,
					},
				},
			},
			orderBy: { submittedAt: "desc" },
		});

		return { success: true, data: requests };
	} catch (error) {
		console.error("Failed to fetch room requests:", error);
		return { success: false, message: "Failed to load room requests." };
	}
}

export async function getAllRoomRequests() {
	try {
		const requests = await prisma.roomRequest.findMany({
			include: {
				student: {
					include: {
						user: true,
					},
				},
				hostel: true,
				assignedRoom: true,
				assignedStaff: {
					include: {
						user: true,
					},
				},
			},
			orderBy: { submittedAt: "desc" },
		});

		return { success: true, data: requests };
	} catch (error) {
		console.error("Failed to fetch room requests:", error);
		return { success: false, message: "Failed to load room requests." };
	}
}

export async function updateRoomRequestStatus(
	requestId: string,
	status: string,
	adminNotes?: string,
	assignedRoomId?: string,
	assignedStaffId?: string
) {
	try {
		const updateData: any = {
			status,
			processedAt: new Date(),
		};

		if (adminNotes) updateData.adminNotes = adminNotes;
		if (assignedRoomId) updateData.assignedRoomId = assignedRoomId;
		if (assignedStaffId) updateData.assignedStaffId = assignedStaffId;

		const updatedRequest = await prisma.roomRequest.update({
			where: { id: requestId },
			data: updateData,
			include: {
				student: {
					include: {
						user: true,
					},
				},
				hostel: true,
				assignedRoom: true,
			},
		});

		// Create notification for student
		await prisma.notification.create({
			data: {
				userId: updatedRequest.student.userId,
				title: "Room Request Updated",
				message: `Your room request has been ${status.toLowerCase()}`,
				type: "REQUEST_UPDATE",
				relatedEntityType: "ROOM_REQUEST",
				relatedEntityId: requestId,
			},
		});

		// If approved, update student's current room
		if (status === "APPROVED" && assignedRoomId) {
			await prisma.student.update({
				where: { id: updatedRequest.studentId },
				data: {
					currentHostelId: updatedRequest.hostelId,
					roomNumber: updatedRequest.assignedRoom?.roomNumber,
				},
			});
		}

		revalidatePath("/admin/requests");
		revalidatePath("/student/dashboard");

		return {
			success: true,
			message: `Request ${status.toLowerCase()} successfully!`,
			data: updatedRequest,
		};
	} catch (error) {
		console.error("Failed to update room request:", error);
		return {
			success: false,
			message: "Failed to update room request. Please try again.",
		};
	}
}

export async function getAvailableRooms(hostelId: string, roomType: string) {
	try {
		const rooms = await prisma.room.findMany({
			where: {
				hostelId,
				roomType,
				status: "AVAILABLE",
				currentOccupancy: 0, // Ensure room is empty
			},
			orderBy: { roomNumber: "asc" },
		});

		return { success: true, data: rooms };
	} catch (error) {
		console.error("Failed to fetch available rooms:", error);
		return { success: false, message: "Failed to load available rooms." };
	}
}
