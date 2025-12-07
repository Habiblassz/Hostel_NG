"use server";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RoomRequestClient from "./RoomRequestClient";

export default async function RoomRequestPage() {
	const session = await auth();

	if (!session?.user?.id) {
		redirect("/login");
	}

	return <RoomRequestClient userId={session.user.id} />;
}
