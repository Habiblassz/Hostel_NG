"use client";

import { useState } from "react";
import { RoomRequest } from "@/types";

const mockRequests: RoomRequest[] = [
	{
		id: "1",
		student: {
			id: "1",
			name: "Sophia Clark",
			email: "sophiaclark@gmail.com",
			studentId: "2021001",
		},
		hostel: "Maple Hall",
		roomType: "Single",
		status: "pending",
		createdAt: new Date("2025-01-15"),
	},
];

export default function AdminRequests() {
	const [requests, setRequests] = useState<RoomRequest[]>(mockRequests);

	const handleApprove = (id: string) => {
		setRequests(
			requests.map((req) =>
				req.id === id ? { ...req, status: "approved" } : req
			)
		);
	};

	const handleReject = (id: string) => {
		setRequests(
			requests.map((req) =>
				req.id === id ? { ...req, status: "rejected" } : req
			)
		);
	};

	return (
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
								{request.student.name}
							</td>
							<td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
								{request.student.studentId}
							</td>
							<td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
								{request.hostel}
							</td>
							<td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
								{request.roomType}
							</td>
							<td className="whitespace-nowrap px-6 py-4 text-sm">
								<span
									className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
										request.status === "approved"
											? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
											: request.status === "rejected"
											? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
											: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
									}`}>
									{request.status.charAt(0).toUpperCase() +
										request.status.slice(1)}
								</span>
							</td>
							<td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
								<div className="flex items-center gap-2">
									<button className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors">
										<span className="material-symbols-outlined text-base">
											visibility
										</span>
										<span className="text-xs">View</span>
									</button>
									{request.status === "pending" && (
										<>
											<button
												onClick={() => handleApprove(request.id)}
												className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-green-500 dark:hover:text-green-500 transition-colors">
												<span className="material-symbols-outlined text-base">
													check_circle
												</span>
												<span className="text-xs">Approve</span>
											</button>
											<button
												onClick={() => handleReject(request.id)}
												className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-500 transition-colors">
												<span className="material-symbols-outlined text-base">
													cancel
												</span>
												<span className="text-xs">Reject</span>
											</button>
										</>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
