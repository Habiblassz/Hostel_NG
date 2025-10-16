"use client";

import { useState } from "react";
import { AccessCard } from "@/types";

const mockAccessCards: AccessCard[] = [
	{
		id: "1",
		student: {
			id: "1",
			name: "Ethan Harper",
			email: "ethanharper@gmail.com",
			studentId: "2021001",
		},
		hostel: "Maple Residence",
		expiryDate: "2025-08-15",
		status: "active",
		qrCode: "https://example.com/qr1",
	},
];

type FilterStatus = "all" | "active" | "expired" | "pending";

export default function AdminAccessCards() {
	const [cards] = useState<AccessCard[]>(mockAccessCards);

	const [filter, setFilter] = useState<FilterStatus>("all");

	const statuses: FilterStatus[] = ["all", "active", "expired", "pending"];

	const filteredCards = cards.filter(
		(card) => filter === "all" || card.status === filter
	);

	return (
		<div>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
				<div className="flex flex-col gap-1">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Access Cards
					</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Manage all issued QR codes and their expiry.
					</p>
				</div>
				<button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded font-medium shadow-sm hover:bg-primary/90 transition-colors">
					<span className="material-symbols-outlined text-xl">add</span>
					<span>Issue New Card</span>
				</button>
			</div>

			<div className="mb-6 flex flex-wrap items-center gap-2">
				<span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
					Filter by:
				</span>
				{statuses.map((status) => (
					<button
						key={status}
						onClick={() => setFilter(status)}
						className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded px-3 text-sm font-medium transition-colors ${
							filter === status
								? "bg-primary/10 dark:bg-primary/20 text-primary"
								: "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
						}`}>
						<span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
					</button>
				))}
			</div>

			<div className="bg-white dark:bg-background-dark/50 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
				<div className="overflow-x-auto">
					<table className="w-full text-sm">
						<thead className="bg-gray-50 dark:bg-gray-800/50">
							<tr>
								<th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Student
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Hostel
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Expiry Date
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Status
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
							{filteredCards.map((card) => (
								<tr key={card.id}>
									<td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-medium">
										{card.student.name}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
										{card.hostel}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
										{card.expiryDate}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
												card.status === "active"
													? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
													: card.status === "expired"
													? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
													: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
											}`}>
											{card.status.charAt(0).toUpperCase() +
												card.status.slice(1)}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap space-x-2">
										<button className="p-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors">
											<span className="material-symbols-outlined text-xl">
												cancel
											</span>
										</button>
										<button className="p-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors">
											<span className="material-symbols-outlined text-xl">
												update
											</span>
										</button>
										<button className="p-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors">
											<span className="material-symbols-outlined text-xl">
												qr_code_2
											</span>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
