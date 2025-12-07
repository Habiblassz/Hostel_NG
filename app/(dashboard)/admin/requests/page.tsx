"use client";

import {
	getAllRoomRequests,
	getAvailableRooms,
	updateRoomRequestStatus,
} from "@/lib/actions/room-request";
import { useState, useEffect } from "react";

interface RoomRequest {
	id: string;
	student: {
		id: string;
		name: string;
		email: string;
		studentId: string;
		user: {
			name: string;
			email: string;
		};
	};
	hostel: {
		id: string;
		name: string;
	};
	roomType: string;
	status: string;
	submittedAt: string;
	assignedRoom?: {
		id: string;
		roomNumber: string;
	};
}

export default function AdminRequests() {
	const [requests, setRequests] = useState<RoomRequest[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [updatingId, setUpdatingId] = useState<string | null>(null);
	const [availableRooms, setAvailableRooms] = useState<
		{ id: string; roomNumber: string }[]
	>([]);
	const [selectedRoom, setSelectedRoom] = useState<{ [key: string]: string }>(
		{}
	);

	useEffect(() => {
		loadRequests();
	}, []);

	const loadRequests = async () => {
		try {
			setLoading(true);
			const result = await getAllRoomRequests();

			if (result.success) {
				setRequests(result.data);
			} else {
				setError(result.message);
			}
		} catch (err) {
			setError("Failed to load requests");
		} finally {
			setLoading(false);
		}
	};

	const handleStatusUpdate = async (requestId: string, status: string) => {
		try {
			setUpdatingId(requestId);

			// If approving, load available rooms first
			if (status === "APPROVED") {
				const request = requests.find((req) => req.id === requestId);
				if (request) {
					const roomsResult = await getAvailableRooms(
						request.hostel.id,
						request.roomType
					);
					if (roomsResult.success) {
						setAvailableRooms(roomsResult.data);
						setSelectedRoom((prev) => ({ ...prev, [requestId]: "" }));
						return; // Wait for room selection
					}
				}
			}

			const result = await updateRoomRequestStatus(requestId, status);

			if (result.success) {
				await loadRequests(); // Refresh data
			} else {
				setError(result.message);
			}
		} catch (err) {
			setError("Failed to update request");
		} finally {
			setUpdatingId(null);
		}
	};

	const handleApproveWithRoom = async (requestId: string, roomId: string) => {
		try {
			setUpdatingId(requestId);

			const result = await updateRoomRequestStatus(
				requestId,
				"APPROVED",
				undefined,
				roomId
			);

			if (result.success) {
				setAvailableRooms([]);
				setSelectedRoom((prev) => ({ ...prev, [requestId]: "" }));
				await loadRequests();
			} else {
				setError(result.message);
			}
		} catch (err) {
			setError("Failed to approve request");
		} finally {
			setUpdatingId(null);
		}
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-64">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Error Message */}
			{error && (
				<div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
					<div className="flex items-center">
						<span className="material-symbols-outlined text-red-500 mr-2">
							error
						</span>
						<p className="text-red-800 dark:text-red-300">{error}</p>
					</div>
				</div>
			)}

			<div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
				<table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
					<thead className="bg-zinc-50 dark:bg-zinc-800/50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
								Student Name
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
								Student ID
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
								Hostel
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
								Room Type
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
								Status
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
						{requests.map((request) => (
							<tr
								key={request.id}
								className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
								<td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-zinc-900 dark:text-white">
									{request.student.user.name}
								</td>
								<td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
									{request.student.studentId}
								</td>
								<td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
									{request.hostel.name}
								</td>
								<td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
									{request.roomType}
								</td>
								<td className="whitespace-nowrap px-6 py-4 text-sm">
									<span
										className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
											request.status === "APPROVED"
												? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
												: request.status === "REJECTED"
												? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
												: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
										}`}>
										{request.status.charAt(0).toUpperCase() +
											request.status.slice(1)}
									</span>
								</td>
								<td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
									{availableRooms.length > 0 &&
									selectedRoom[request.id] !== undefined ? (
										<div className="flex items-center gap-2">
											<select
												value={selectedRoom[request.id] || ""}
												onChange={(e) =>
													setSelectedRoom((prev) => ({
														...prev,
														[request.id]: e.target.value,
													}))
												}
												className="text-sm border border-zinc-300 dark:border-zinc-600 rounded px-2 py-1">
												<option value="">Select Room</option>
												{availableRooms.map((room) => (
													<option key={room.id} value={room.id}>
														{room.roomNumber}
													</option>
												))}
											</select>
											<button
												onClick={() =>
													handleApproveWithRoom(
														request.id,
														selectedRoom[request.id]
													)
												}
												disabled={
													!selectedRoom[request.id] || updatingId === request.id
												}
												className="flex items-center gap-1 text-green-600 hover:text-green-800 disabled:opacity-50 disabled:cursor-not-allowed">
												{updatingId === request.id ? (
													<div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
												) : (
													<span className="material-symbols-outlined text-base">
														check_circle
													</span>
												)}
												<span className="text-xs">Confirm</span>
											</button>
											<button
												onClick={() => {
													setAvailableRooms([]);
													setSelectedRoom((prev) => ({
														...prev,
														[request.id]: undefined,
													}));
												}}
												className="flex items-center gap-1 text-zinc-600 hover:text-zinc-800">
												<span className="material-symbols-outlined text-base">
													cancel
												</span>
												<span className="text-xs">Cancel</span>
											</button>
										</div>
									) : (
										<div className="flex items-center gap-2">
											<button className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors">
												<span className="material-symbols-outlined text-base">
													visibility
												</span>
												<span className="text-xs">View</span>
											</button>
											{request.status === "PENDING" && (
												<>
													<button
														onClick={() =>
															handleStatusUpdate(request.id, "APPROVED")
														}
														disabled={updatingId === request.id}
														className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-green-500 dark:hover:text-green-500 transition-colors disabled:opacity-50">
														{updatingId === request.id ? (
															<div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
														) : (
															<span className="material-symbols-outlined text-base">
																check_circle
															</span>
														)}
														<span className="text-xs">Approve</span>
													</button>
													<button
														onClick={() =>
															handleStatusUpdate(request.id, "REJECTED")
														}
														disabled={updatingId === request.id}
														className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-500 transition-colors disabled:opacity-50">
														{updatingId === request.id ? (
															<div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
														) : (
															<span className="material-symbols-outlined text-base">
																cancel
															</span>
														)}
														<span className="text-xs">Reject</span>
													</button>
												</>
											)}
										</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{requests.length === 0 && (
					<div className="text-center py-12">
						<span className="material-symbols-outlined text-zinc-400 text-4xl mb-4">
							assignment
						</span>
						<h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
							No room requests
						</h3>
						<p className="text-zinc-500 dark:text-zinc-400">
							All room requests have been processed.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
