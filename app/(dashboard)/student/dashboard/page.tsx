import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getStudentRoomRequests } from "@/lib/actions/room-request";
import { getStudentAccessCard } from "@/lib/actions/access-cards";

export default async function StudentDashboard() {
	const session = await auth();

	if (!session?.user?.id) {
		redirect("/login");
	}

	// Fetch student data
	const [roomRequestsResult, accessCardResult] = await Promise.all([
		getStudentRoomRequests(session.user.id),
		getStudentAccessCard(session.user.id),
	]);

	const pendingRequests = roomRequestsResult.success
		? roomRequestsResult.data?.filter((req) => req.status === "PENDING")
		: [];

	const activeAccessCard = accessCardResult.success
		? accessCardResult.data
		: null;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div className="lg:col-span-2 card">
				<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
					Current Status
				</h3>
				<div className="flex flex-col items-start p-6 bg-slate-50 dark:bg-slate-800/30 rounded-lg">
					{pendingRequests &&
						(pendingRequests.length > 0 ? (
							<div className="w-full">
								<p className="text-slate-600 dark:text-slate-300 mb-2">
									You have {pendingRequests.length} pending room request(s)
								</p>
								<div className="space-y-2">
									{pendingRequests.map((request) => (
										<div
											key={request.id}
											className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-lg">
											<div>
												<p className="font-medium text-slate-800 dark:text-white">
													{request.hostel?.name} - {request.roomType}
												</p>
												<p className="text-sm text-slate-600 dark:text-slate-400">
													Submitted:{" "}
													{new Date(request.submittedAt).toLocaleDateString()}
												</p>
											</div>
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
												Pending
											</span>
										</div>
									))}
								</div>
							</div>
						) : (
							<>
								<p className="text-slate-600 dark:text-slate-300 mb-4">
									No room request yet.
								</p>
								<Link
									href="/student/room-request"
									className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm">
									<span className="material-symbols-outlined text-xl">
										add_circle
									</span>
									<span>Request Room</span>
								</Link>
							</>
						))}
				</div>
			</div>

			<div className="card">
				<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
					Quick Links
				</h3>
				<div className="space-y-3">
					<Link
						href="/student/access-card"
						className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
						<span className="material-symbols-outlined">credit_card</span>
						<span>View Access Card</span>
					</Link>
					<Link
						href="/student/updates"
						className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
						<span className="material-symbols-outlined">campaign</span>
						<span>Check Updates</span>
					</Link>
					{activeAccessCard && (
						<div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
							<p className="text-sm text-green-800 dark:text-green-300">
								✅ Access Card Active
							</p>
							<p className="text-xs text-green-600 dark:text-green-400 mt-1">
								Expires:{" "}
								{new Date(activeAccessCard.expiryDate).toLocaleDateString()}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
