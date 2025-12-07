import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
	console.log("🌱 Starting seed...");

	// Clear existing data
	await prisma.notification.deleteMany();
	await prisma.accessCard.deleteMany();
	await prisma.roomRequest.deleteMany();
	await prisma.post.deleteMany();
	await prisma.room.deleteMany();
	await prisma.hostel.deleteMany();
	await prisma.staff.deleteMany();
	await prisma.student.deleteMany();
	await prisma.user.deleteMany();

	// Create admin user
	const admin = await prisma.user.create({
		data: {
			email: "lassz@admin.role",
			name: "Admin User",
			password: await hash("passkey", 10),
			role: "admin",
			avatar: "https://lh3.googleusercontent.com/a/default-user",
		},
	});

	// Create student user
	const studentUser = await prisma.user.create({
		data: {
			email: "student@university.com",
			name: "Sarah Johnson",
			password: await hash("password", 10),
			role: "student",
			avatar: "https://lh3.googleusercontent.com/a/default-user",
			phone: "+1234567890",
			emergencyContact: "+1234567891",
			address: "123 University Ave, Campus City",
		},
	});

	const student = await prisma.student.create({
		data: {
			studentId: "2021001",
			userId: studentUser.id,
		},
	});

	const studentUser2 = await prisma.user.create({
		data: {
			email: "alicejohnson@gmail.com",
			name: "Alice Johnson",
			password: await hash("password", 10),
			role: "student",
			avatar: "https://lh3.googleusercontent.com/a/default-user",
			phone: "+12345678902",
			emergencyContact: "+12345678912",
			address: "123 University Ave, Campus City",
		},
	});

	const student2 = await prisma.student.create({
		data: {
			studentId: "2021002",
			userId: studentUser2.id,
		},
	});

	// Create hostel
	const hostel = await prisma.hostel.create({
		data: {
			name: "Maple Residence",
			description: "Premium student accommodation",
			totalRooms: 50,
			availableRooms: 45,
			status: "ACTIVE",
		},
	});

	// Create room
	const room = await prisma.room.create({
		data: {
			hostelId: hostel.id,
			roomNumber: "101",
			roomType: "SINGLE",
			capacity: 1,
			currentOccupancy: 0,
			status: "AVAILABLE",
			price: 1200.0,
		},
	});

	// Create room request
	await prisma.roomRequest.create({
		data: {
			studentId: student.id,
			hostelId: hostel.id,
			roomType: "SINGLE",
			sessionDuration: "FALL_2024",
			status: "PENDING",
		},
	});
	await prisma.roomRequest.create({
		data: {
			studentId: student2.id,
			hostelId: hostel.id,
			roomType: "DOUBLE",
			sessionDuration: "FALL_2025",
			status: "PENDING",
		},
	});

	// Create post
	await prisma.post.create({
		data: {
			title: "Welcome to Student Hostel",
			category: "ANNOUNCEMENTS",
			content: "We are excited to welcome you to our hostel management system!",
			authorId: admin.id,
			targetAudience: "ALL",
		},
	});

	console.log("✅ Seed completed successfully!");
}

main()
	.catch((e) => {
		console.error("❌ Seed failed:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
