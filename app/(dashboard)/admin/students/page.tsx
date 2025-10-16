"use client";

import { useState } from "react";
import { Student } from "@/types";
import Image from "next/image";

const mockStudents: Student[] = [
	{
		id: "1",
		name: "Sophia Clark",
		email: "sophia.clark@student.edu",
		studentId: "2021001",
		avatar:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCYE-Hjz227gXuC4qjUnMQwy-tRKeOdb1nQdAenenWsckYQoLBzzaK7KAie0e6NdHoUejOdjDtJrPV6IKPkg5TI-3jK898qV4JukkDSgNLzbOOLZlaxXcKcMhj0pi2xMO8I-MrzY2kuoZ0dmdVf1qXnMXBLUViTAxyAEJhfoR-OaJtzhwzfKqEWB5CAvpplddzw5Wp-EXDUPMOWRiS2b6PHljMmxAD-PhJ5VUmLiXbaOuwc4FsLOIlw-M-teI48JPGnBHiH_SjM2YI",
	},
	{
		id: "2",
		name: "Ethan Miller",
		email: "ethan.miller@student.edu",
		studentId: "2021002",
	},
	{
		id: "3",
		name: "Olivia Davis",
		email: "olivia.davis@student.edu",
		studentId: "2021003",
	},
	{
		id: "4",
		name: "Noah Wilson",
		email: "noah.wilson@student.edu",
		studentId: "2021004",
	},
	{
		id: "5",
		name: "Ava Thompson",
		email: "ava.thompson@student.edu",
		studentId: "2021005",
	},
];

export default function AdminStudents() {
	const [students] = useState<Student[]>(mockStudents);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredStudents = students.filter(
		(student) =>
			student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.studentId.includes(searchTerm) ||
			student.email.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
						Students
					</h1>
					<p className="text-zinc-500 dark:text-zinc-400 mt-1">
						Manage all student accounts and information
					</p>
				</div>
				<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors">
					<span className="material-symbols-outlined">add</span>
					<span>Add Student</span>
				</button>
			</div>

			{/* Search and Filters */}
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="flex-1 relative">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<span className="material-symbols-outlined text-zinc-400">
							search
						</span>
					</div>
					<input
						type="text"
						placeholder="Search students by name, ID, or email..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:ring-2 focus:ring-primary focus:border-primary"
					/>
				</div>
				<div className="flex gap-2">
					<button className="px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
						Filter
					</button>
					<button className="px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
						Sort
					</button>
				</div>
			</div>

			{/* Students Table */}
			<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
						<thead className="bg-zinc-50 dark:bg-zinc-800/50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
									Student
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
									Student ID
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
									Email
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
							{filteredStudents.map((student) => (
								<tr
									key={student.id}
									className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<div className="h-10 w-10 flex-shrink-0">
												<Image
													className="h-10 w-10 rounded-full object-cover"
													src={student.avatar || "/default-avatar.png"}
													alt={student.name}
													width={100}
													height={100}
												/>
											</div>
											<div className="ml-4">
												<div className="text-sm font-medium text-zinc-900 dark:text-white">
													{student.name}
												</div>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
										{student.studentId}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
										{student.email}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
											Active
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										<div className="flex items-center gap-2">
											<button className="text-primary hover:text-primary/80 transition-colors">
												<span className="material-symbols-outlined text-lg">
													visibility
												</span>
											</button>
											<button className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
												<span className="material-symbols-outlined text-lg">
													edit
												</span>
											</button>
											<button className="text-red-600 hover:text-red-800 transition-colors">
												<span className="material-symbols-outlined text-lg">
													delete
												</span>
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Pagination */}
				<div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
					<div className="text-sm text-zinc-500 dark:text-zinc-400">
						Showing 1 to 5 of 1,247 students
					</div>
					<div className="flex items-center gap-2">
						<button className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
							<span className="material-symbols-outlined text-lg">
								chevron_left
							</span>
						</button>
						<button className="w-10 h-10 rounded-lg bg-primary text-white font-medium">
							1
						</button>
						<button className="w-10 h-10 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
							2
						</button>
						<button className="w-10 h-10 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
							3
						</button>
						<button className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
							<span className="material-symbols-outlined text-lg">
								chevron_right
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
