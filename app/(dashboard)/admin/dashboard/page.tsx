import { RoomRequest } from "@/types";

const stats = [
	{ label: "Total Students", value: "1,247", change: "+12%" },
	{ label: "Pending Requests", value: "23", change: "-5%" },
	{ label: "Active Cards", value: "1,189", change: "+8%" },
	{ label: "Occupancy Rate", value: "95%", change: "+3%" },
];

const recentRequests: RoomRequest[] = [
	{
		id: "1",
		student: {
			id: "1",
			name: "Sophia Clark",
			studentId: "2021001",
			email: "sophiaclark@gmail.com",
		},
		hostel: "Maple Hall",
		roomType: "Single",
		status: "pending",
		createdAt: new Date("2025-01-15"),
	},
	{
		id: "2",
		student: {
			id: "2",
			name: "Ethan Miller",
			studentId: "2021002",
			email: "ethanmiller@gmail.com",
		},
		hostel: "Oak Residence",
		roomType: "Double",
		status: "pending",
		createdAt: new Date("2025-01-14"),
	},
];

export default function AdminDashboard() {
	return (
		<div className="space-y-8">
			{/* Stats Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
									{stat.label}
								</p>
								<p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">
									{stat.value}
								</p>
							</div>
							<div
								className={`px-2 py-1 rounded-full text-xs font-medium ${
									stat.change.startsWith("+")
										? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
										: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
								}`}>
								{stat.change}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Recent Requests */}
				<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
					<div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
							Recent Requests
						</h3>
					</div>
					<div className="divide-y divide-zinc-200 dark:divide-zinc-800">
						{recentRequests.map((request) => (
							<div key={request.id} className="px-6 py-4">
								<div className="flex items-center justify-between">
									<div>
										<p className="font-medium text-zinc-900 dark:text-white">
											{request.student.name}
										</p>
										<p className="text-sm text-zinc-500 dark:text-zinc-400">
											{request.hostel} • {request.roomType}
										</p>
									</div>
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
										Pending
									</span>
								</div>
							</div>
						))}
					</div>
					<div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800">
						<a
							href="/admin/requests"
							className="text-primary hover:text-primary/80 text-sm font-medium">
							View all requests →
						</a>
					</div>
				</div>

				{/* Quick Actions */}
				<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
					<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
						Quick Actions
					</h3>
					<div className="space-y-3">
						<a
							href="/admin/requests"
							className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
							<span className="material-symbols-outlined">assignment</span>
							<span>Manage Requests</span>
						</a>
						<a
							href="/admin/access-cards"
							className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
							<span className="material-symbols-outlined">credit_card</span>
							<span>Access Cards</span>
						</a>
						<a
							href="/admin/posts"
							className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
							<span className="material-symbols-outlined">campaign</span>
							<span>Post Updates</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
