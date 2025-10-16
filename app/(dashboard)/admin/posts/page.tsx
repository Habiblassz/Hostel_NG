"use client";

import { useState } from "react";
import { UpdatePost } from "@/types";

const mockPosts: UpdatePost[] = [
	{
		id: "1",
		title: "Hostel Update: New Study Lounge",
		category: "Facilities",
		content:
			"We are excited to announce the opening of our new study lounge...",
		datePosted: "2025-07-26",
	},
];

export default function AdminPosts() {
	const [posts, setPosts] = useState<UpdatePost[]>(mockPosts);
	const [newPost, setNewPost] = useState({
		title: "",
		category: "Facilities",
		content: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const post: UpdatePost = {
			id: Date.now().toString(),
			...newPost,
			datePosted: new Date().toISOString().split("T")[0],
		};
		setPosts([post, ...posts]);
		setNewPost({ title: "", category: "Facilities", content: "" });
	};

	const handleDelete = (id: string) => {
		setPosts(posts.filter((post) => post.id !== id));
	};

	return (
		<div className="max-w-6xl mx-auto">
			<div className="mb-8 flex items-center justify-between">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
					Posts
				</h2>
				<button className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
					<span className="material-symbols-outlined text-base">add</span>
					<span>New Post</span>
				</button>
			</div>

			<div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark shadow-sm mb-8">
				<div className="overflow-x-auto">
					<table className="min-w-full table-auto">
						<thead className="bg-gray-50 dark:bg-gray-800/50">
							<tr>
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
									Title
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
									Category
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
									Date Posted
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 dark:divide-gray-800">
							{posts.map((post) => (
								<tr key={post.id}>
									<td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
										{post.title}
									</td>
									<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
										{post.category}
									</td>
									<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
										{post.datePosted}
									</td>
									<td className="whitespace-nowrap px-6 py-4 text-sm">
										<div className="flex items-center gap-4">
											<button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-primary dark:hover:text-primary">
												<span className="material-symbols-outlined text-base">
													edit
												</span>
												Edit
											</button>
											<button
												onClick={() => handleDelete(post.id)}
												className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-red-500 dark:hover:text-red-500">
												<span className="material-symbols-outlined text-base">
													delete
												</span>
												Delete
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 shadow-sm">
				<h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
					Create New Post
				</h3>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
							htmlFor="title">
							Title
						</label>
						<input
							id="title"
							type="text"
							value={newPost.title}
							onChange={(e) =>
								setNewPost((prev) => ({ ...prev, title: e.target.value }))
							}
							className="block w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark p-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
							placeholder="Enter post title"
							required
						/>
					</div>

					<div>
						<label
							className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
							htmlFor="category">
							Category
						</label>
						<select
							id="category"
							value={newPost.category}
							onChange={(e) =>
								setNewPost((prev) => ({ ...prev, category: e.target.value }))
							}
							className="block w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark p-2.5 text-sm text-gray-900 dark:text-white focus:border-primary focus:ring-primary">
							<option>Facilities</option>
							<option>Announcements</option>
							<option>Events</option>
							<option>Maintenance</option>
							<option>Finance</option>
						</select>
					</div>

					<div>
						<label
							className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
							htmlFor="content">
							Content
						</label>
						<textarea
							id="content"
							value={newPost.content}
							onChange={(e) =>
								setNewPost((prev) => ({ ...prev, content: e.target.value }))
							}
							className="block w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark p-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
							placeholder="Write your post content here..."
							rows={6}
							required
						/>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="rounded bg-primary px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
							Publish Post
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
