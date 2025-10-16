export interface Student {
	id: string;
	name: string;
	email: string;
	avatar?: string;
	studentId: string;
}

export interface Hostel {
	id: string;
	name: string;
	description: string;
	image: string;
	priceRange: string;
	roomTypes: string[];
	amenities: string[];
	location: string;
	rating: number;
}

export interface RoomRequest {
	id: string;
	student: Student;
	hostel: string;
	roomType: string;
	status: "pending" | "approved" | "rejected";
	createdAt: Date;
}

export interface AccessCard {
	id: string;
	student: Student;
	hostel: string;
	expiryDate: string;
	status: "active" | "expired" | "pending";
	qrCode: string;
}

export interface UpdatePost {
	id: string;
	title: string;
	category: string;
	content: string;
	datePosted: string;
	image?: string;
}

export interface Staff {
	id: string;
	name: string;
	email: string;
	role: string;
	department: string;
	phone: string;
	status: "active" | "inactive";
	avatar?: string;
	joinDate: string;
}
