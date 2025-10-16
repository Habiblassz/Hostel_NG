// import { hashSync } from "bcrypt-ts-edge";

export const users = [
	{
		id: "1",
		name: "Alice Johnson",
		email: "alicejohnson@gmail.com",
		role: "student",
		// password: hashSync("password", 10),
		password: "password",
	},
	{
		id: "2",
		name: "John Doe",
		email: "johndoe@gmail.com",
		role: "admin",
		password: "adminpass",
		// password: hashSync("adminpass", 10),
	},
	{
		id: "99999999",
		name: "Lassz Junior",
		email: "lassz@admin.role",
		role: "admin",
		password: "passkey",
		// password: hashSync("passkey", 10),
	},
];
