"use client";

import { useState } from "react";
import { mockStaff } from "@/data/staff";
import { Staff } from "@/types";
import Image from "next/image";

export default function AdminStaff() {
	const [staff, setStaff] = useState<Staff[]>(mockStaff);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedDepartment, setSelectedDepartment] = useState("all");
	const [selectedStatus, setSelectedStatus] = useState("all");
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	const departments = [
		"all",
		"Management",
		"Student Services",
		"Maintenance",
		"Security",
		"IT",
		"Housekeeping",
	];
	const statuses = ["all", "active", "inactive"];

	const filteredStaff = staff.filter((member) => {
		const matchesSearch =
			member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			member.role.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesDepartment =
			selectedDepartment === "all" || member.department === selectedDepartment;
		const matchesStatus =
			selectedStatus === "all" || member.status === selectedStatus;

		return matchesSearch && matchesDepartment && matchesStatus;
	});

	const handleStatusToggle = (id: string) => {
		setStaff(
			staff.map((member) =>
				member.id === id
					? {
							...member,
							status: member.status === "active" ? "inactive" : "active",
					  }
					: member
			)
		);
	};

	const handleDeleteStaff = (id: string) => {
		if (confirm("Are you sure you want to remove this staff member?")) {
			setStaff(staff.filter((member) => member.id !== id));
		}
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
						Staff Management
					</h1>
					<p className="text-zinc-500 dark:text-zinc-400 mt-1">
						Manage staff members and their roles
					</p>
				</div>
				<button
					onClick={() => setIsAddModalOpen(true)}
					className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors">
					<span className="material-symbols-outlined">add</span>
					<span>Add Staff Member</span>
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
						placeholder="Search staff by name, email, or role..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:ring-2 focus:ring-primary focus:border-primary"
					/>
				</div>

				<div className="flex gap-2">
					<select
						value={selectedDepartment}
						onChange={(e) => setSelectedDepartment(e.target.value)}
						className="px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary">
						{departments.map((dept) => (
							<option key={dept} value={dept}>
								{dept === "all" ? "All Departments" : dept}
							</option>
						))}
					</select>

					<select
						value={selectedStatus}
						onChange={(e) => setSelectedStatus(e.target.value)}
						className="px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary">
						{statuses.map((status) => (
							<option key={status} value={status}>
								{status === "all"
									? "All Status"
									: status.charAt(0).toUpperCase() + status.slice(1)}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Staff Table */}
			<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
						<thead className="bg-zinc-50 dark:bg-zinc-800/50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
									Staff Member
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
									Role & Department
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
									Contact
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
									Join Date
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
							{filteredStaff.map((member) => (
								<tr
									key={member.id}
									className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<div className="h-10 w-10 flex-shrink-0">
												<Image
													className="h-10 w-10 rounded-full object-cover"
													src={member.avatar || "/default-avatar.png"}
													alt={member.name}
													width={100}
													height={100}
												/>
											</div>
											<div className="ml-4">
												<div className="text-sm font-medium text-zinc-900 dark:text-white">
													{member.name}
												</div>
												<div className="text-sm text-zinc-500 dark:text-zinc-400">
													{member.email}
												</div>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm font-medium text-zinc-900 dark:text-white">
											{member.role}
										</div>
										<div className="text-sm text-zinc-500 dark:text-zinc-400">
											{member.department}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
										{member.phone}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
										{new Date(member.joinDate).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
										})}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<button
											onClick={() => handleStatusToggle(member.id)}
											className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
												member.status === "active"
													? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70"
													: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/70"
											}`}>
											<span className="w-2 h-2 rounded-full mr-1.5 bg-current"></span>
											{member.status === "active" ? "Active" : "Inactive"}
										</button>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										<div className="flex items-center gap-2">
											<button
												className="text-primary hover:text-primary/80 transition-colors"
												title="View Details">
												<span className="material-symbols-outlined text-lg">
													visibility
												</span>
											</button>
											<button
												className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
												title="Edit Staff">
												<span className="material-symbols-outlined text-lg">
													edit
												</span>
											</button>
											<button
												onClick={() => handleDeleteStaff(member.id)}
												className="text-red-600 hover:text-red-800 transition-colors"
												title="Remove Staff">
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

				{/* Empty State */}
				{filteredStaff.length === 0 && (
					<div className="text-center py-12">
						<span className="material-symbols-outlined text-zinc-400 text-4xl mb-4">
							group
						</span>
						<h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
							No staff members found
						</h3>
						<p className="text-zinc-500 dark:text-zinc-400 mb-4">
							{searchTerm ||
							selectedDepartment !== "all" ||
							selectedStatus !== "all"
								? "Try adjusting your search or filters"
								: "Get started by adding your first staff member"}
						</p>
						{searchTerm ||
						selectedDepartment !== "all" ||
						selectedStatus !== "all" ? (
							<button
								onClick={() => {
									setSearchTerm("");
									setSelectedDepartment("all");
									setSelectedStatus("all");
								}}
								className="text-primary hover:text-primary/80 font-medium">
								Clear all filters
							</button>
						) : (
							<button
								onClick={() => setIsAddModalOpen(true)}
								className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors mx-auto">
								<span className="material-symbols-outlined">add</span>
								<span>Add Staff Member</span>
							</button>
						)}
					</div>
				)}

				{/* Pagination */}
				{filteredStaff.length > 0 && (
					<div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
						<div className="text-sm text-zinc-500 dark:text-zinc-400">
							Showing {filteredStaff.length} of {staff.length} staff members
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
				)}
			</div>

			{/* Add Staff Modal */}
			{isAddModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
									Add New Staff Member
								</h3>
								<button
									onClick={() => setIsAddModalOpen(false)}
									className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
									<span className="material-symbols-outlined">close</span>
								</button>
							</div>

							<form className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
										Full Name
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
										placeholder="Enter full name"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
										Email Address
									</label>
									<input
										type="email"
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
										placeholder="Enter email address"
									/>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
											Role
										</label>
										<input
											type="text"
											className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
											placeholder="Enter role"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
											Department
										</label>
										<select className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary">
											<option value="">Select department</option>
											{departments
												.filter((d) => d !== "all")
												.map((dept) => (
													<option key={dept} value={dept}>
														{dept}
													</option>
												))}
										</select>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
										Phone Number
									</label>
									<input
										type="tel"
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
										placeholder="Enter phone number"
									/>
								</div>

								<div className="flex gap-3 pt-4">
									<button
										type="button"
										onClick={() => setIsAddModalOpen(false)}
										className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
										Cancel
									</button>
									<button
										type="submit"
										className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
										Add Staff Member
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
