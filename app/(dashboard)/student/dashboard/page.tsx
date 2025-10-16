// import { Student } from "@/types";

// const mockStudent: Student = {
// 	id: "1",
// 	name: "Sarah",
// 	email: "sarah@student.edu",
// 	studentId: "2021001",
// 	avatar:
// 		"https://lh3.googleusercontent.com/aida-public/AB6AXuAGa80-4xnBQck8M-p5zJDygpRsuyU7rMY9E-KhmToaZqTpAh4ql9bgLvvLqYCUCZdbfzADq0pEfih_gSMPyQgDSEKhE6NFIj7NSR3_NQ9Gb85kEsqE43mjAIuKsDsPmHV86kzOWvxDcsIEtqG5kgMwHpe1X53BO6M3EraxFDWFiw0mdRMr2mfbIruns0G2jHJ40dAYk70ewzaK1beGml7-SVeacvoZTMaQq5iPKygxfpwVmw46DHKBwfShs9HP9dI3dykbAWYSSQE",
// };

export default function StudentDashboard() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div className="lg:col-span-2 card">
				<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
					Current Status
				</h3>
				<div className="flex flex-col items-start p-6 bg-slate-50 dark:bg-slate-800/30 rounded-lg">
					<p className="text-slate-600 dark:text-slate-300 mb-4">
						No room request yet.
					</p>
					<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm">
						<span className="material-symbols-outlined text-xl">
							add_circle
						</span>
						<span>Request Room</span>
					</button>
				</div>
			</div>
			<div className="card">
				<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
					Quick Links
				</h3>
				<div className="space-y-3">
					<a
						href="/student/access-card"
						className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
						<span className="material-symbols-outlined">credit_card</span>
						<span>View Access Card</span>
					</a>
					<a
						href="/updates"
						className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
						<span className="material-symbols-outlined">campaign</span>
						<span>Check Updates</span>
					</a>
				</div>
			</div>
		</div>
	);
}
