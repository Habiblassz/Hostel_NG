import { UpdatePost } from "@/types";
import Image from "next/image";

interface UpdatesFeedProps {
	updates: UpdatePost[];
	limit?: number;
}

export default function UpdatesFeed({ updates, limit }: UpdatesFeedProps) {
	const displayedUpdates = limit ? updates.slice(0, limit) : updates;

	return (
		<div className="space-y-8">
			{displayedUpdates.map((update) => (
				<article
					key={update.id}
					className="relative group grid md:grid-cols-5 gap-6 md:gap-8 items-start">
					{update.image && (
						<div className="md:col-span-2">
							<div className="aspect-w-16 aspect-h-9">
								<Image
									alt={update.title}
									className="w-full h-full object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
									src={update.image}
									width={100}
									height={100}
								/>
							</div>
						</div>
					)}
					<div className={update.image ? "md:col-span-3" : "md:col-span-5"}>
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
						<p className="mt-3 flex items-center text-sm font-medium text-primary group-hover:underline cursor-pointer">
							Read More{" "}
							<span className="material-symbols-outlined text-sm ml-1">
								arrow_forward
							</span>
						</p>
					</div>
				</article>
			))}
		</div>
	);
}
