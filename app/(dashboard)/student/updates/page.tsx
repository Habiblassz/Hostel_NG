import { UpdatePost } from "@/types";
import Image from "next/image";

const mockUpdates: UpdatePost[] = [
	{
		id: "1",
		title: "Welcome to the New Academic Year",
		category: "General",
		content:
			"Dear Residents, we are thrilled to welcome you to the new academic year at Student Housing! We hope you had a restful and rejuvenating break.",
		datePosted: "2025-08-01",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDoScggIqHKcb_13ywMJyhAAnhaUkEe16Jfet7Ed63pKDje0wpZ9kcR2TsNZudulskbAYZzloicDziLaOw0dDQptmDOg_n-mxtzjtY91odV6NF-jIIvd7hznpiqNgokokpvVogRA1KqVL8g-KfNhVh-hmTrAtjr-lKWdk1maHJuIxjL3U8c2aVNU7GbIUyVZbubE9R-jhOi8HemushgvOSMJ1UEa8YM1tgmIe89VOmWKMylLKn_eRQr96GTy5DTXb2rvESbEEHD6Mo",
	},
];

export default function Updates() {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Hostel Updates
			</h2>
			<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
				News and announcements from the admin.
			</p>

			<div className="mt-12 space-y-8">
				{mockUpdates.map((update) => (
					<article
						key={update.id}
						className="relative group grid md:grid-cols-5 gap-6 md:gap-8 items-start">
						<div className="md:col-span-2">
							<div className="aspect-w-16 aspect-h-9">
								{update.image && (
									<Image
										alt={update.title}
										className="w-full h-full object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
										src={update.image}
										width={100}
										height={100}
									/>
								)}
							</div>
						</div>
						<div className="md:col-span-3">
							<div className="mb-2 flex items-center space-x-3 text-sm">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
									{update.category}
								</span>
								<time className="text-gray-500 dark:text-gray-400">
									{update.datePosted}
								</time>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								{update.title}
							</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
								{update.content}
							</p>
							<p className="mt-3 flex items-center text-sm font-medium text-primary group-hover:underline">
								Read More{" "}
								<span className="material-symbols-outlined text-sm ml-1">
									arrow_forward
								</span>
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
