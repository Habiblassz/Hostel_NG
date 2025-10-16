import { AccessCard } from "@/types";
import Image from "next/image";

const mockAccessCards: AccessCard[] = [
	{
		id: "1",
		student: {
			id: "1",
			name: "Emily Carter",
			email: "emilycarter@gmail.com",
			studentId: "123456",
		},
		hostel: "Maple Residence",
		expiryDate: "2025-08-15",
		status: "active",
		qrCode:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDk6Tl6W6Arcnl3efj-UVwDDV5yv-njR211NZpQMBc0zGOwXM2hpAyMlyN7zuV6p8TVjXD7XMwHaLnKB-zTQn1fYONny1yOI7YLJWtSL3T2uIs0X7AFCAUfdKk685ls27MOuXUX1irvc_uOwJF_Ors4ddso66cMIceHDz34jq_CHN8O-uNmbIpYEXGukR2gIDEAqCwLUmMgNJnI-k85mxt8yEtil1fxy8BUFm0qlCIXYj_5z0smVXzhJpP5RiG0HgyEJd8sWToZD0M",
	},
];

export default function AccessCardPage() {
	const activeCard = mockAccessCards.find((card) => card.status === "active");

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-4xl font-bold text-center mb-10">My Access Card</h1>
			{activeCard && (
				<div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
					<div className="p-8">
						<div className="flex flex-col md:flex-row gap-8">
							<div className="w-full md:w-1/2 flex flex-col justify-between">
								<div>
									<div className="flex justify-between items-start">
										<h2 className="text-2xl font-bold text-primary">
											StudentHostel
										</h2>
										<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
											Active
										</span>
									</div>
									<div className="mt-6 space-y-4">
										<div className="flex items-center">
											<span className="material-symbols-outlined mr-3">
												person
											</span>
											<div>
												<p className="font-semibold">
													{activeCard.student.name}
												</p>
												<p className="text-sm text-gray-500">
													ID: {activeCard.student.studentId}
												</p>
											</div>
										</div>
										<div className="flex items-center">
											<span className="material-symbols-outlined mr-3">
												door_front
											</span>
											<p>
												Room: <span className="font-semibold">203</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-background-dark p-4 rounded-lg">
								<Image
									alt="QR Code"
									className="w-52 h-52 md:w-64 md:h-64 object-contain"
									src={activeCard.qrCode}
									width={200}
									height={200}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
