"use client";

import { redirect } from "next/navigation";

export default function RequestRoomButton() {
	const requestRoom = () => {
		return redirect("/login");
	};

	return (
		<button
			onClick={requestRoom}
			className="w-full px-6 py-3 text-base font-bold bg-primary text-white rounded-full hover:bg-primary/90 transition-transform transform hover:scale-105 shadow-lg">
			Request Room
		</button>
	);
}
