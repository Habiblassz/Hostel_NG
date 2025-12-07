export interface User {
	id: string;
	email: string;
	name: string;
	role: string;
	avatar?: string;
	phone?: string;
	emergencyContact?: string;
	address?: string;
	status: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Student {
	name?: string;
	email?: string;
	id: string;
	studentId: string;
	userId: string;
	currentHostelId?: string;
	roomNumber?: string;
	user?: User;
}

export interface RoomRequest {
	id: string;
	studentId: string;
	hostelId: string;
	roomType: string;
	sessionDuration: string;
	status: string;
	assignedRoomId?: string;
	assignedStaffId?: string;
	adminNotes?: string;
	submittedAt: Date;
	processedAt?: Date;
	student?: Student;
	hostel?: Hostel;
	assignedRoom?: Room;
}

export interface AccessCard {
	id: string;
	studentId: string;
	hostelId: string;
	roomId: string;
	qrCodeUrl: string;
	expiryDate: Date;
	status: string;
	issuedById: string;
	issuedAt: Date;
	lastUpdated: Date;
	student?: Student;
	hostel?: Hostel;
	room?: Room;
}

export interface Post {
	id: string;
	title: string;
	category: string;
	content: string;
	imageUrl?: string;
	authorId: string;
	targetAudience: string;
	isPublished: boolean;
	createdAt: Date;
	updatedAt: Date;
	author?: User;
}

export interface Hostel {
	id: string;
	name: string;
	description?: string;
	totalRooms: number;
	availableRooms: number;
	status: string;
	createdAt: Date;
}

export interface Room {
	id: string;
	hostelId: string;
	roomNumber: string;
	roomType: string;
	capacity: number;
	currentOccupancy: number;
	status: string;
	price?: number;
	amenities?: string;
}

export interface Staff {
	id: string;
	userId: string;
	department: string;
	position: string;
	joinDate: Date;
	user?: User;
}

export interface Notification {
	id: string;
	userId: string;
	title: string;
	message: string;
	type: string;
	relatedEntityType?: string;
	relatedEntityId?: string;
	isRead: boolean;
	createdAt: Date;
}
