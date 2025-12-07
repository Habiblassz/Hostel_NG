"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: {
	title: string;
	category: string;
	content: string;
	imageUrl?: string;
	authorId: string;
	targetAudience?: string;
}) {
	try {
		const post = await prisma.post.create({
			data: {
				title: formData.title,
				category: formData.category,
				content: formData.content,
				imageUrl: formData.imageUrl,
				authorId: formData.authorId,
				targetAudience: formData.targetAudience || "ALL",
				isPublished: true,
			},
			include: {
				author: true,
			},
		});

		// Create notifications for target audience
		let targetUsers: { id: string }[] = [];

		if (formData.targetAudience === "STUDENTS") {
			targetUsers = await prisma.user.findMany({
				where: { role: "STUDENT" },
				select: { id: true },
			});
		} else if (formData.targetAudience === "STAFF") {
			targetUsers = await prisma.user.findMany({
				where: { role: "STAFF" },
				select: { id: true },
			});
		} else {
			// ALL - get all users except admin who created the post
			targetUsers = await prisma.user.findMany({
				where: { id: { not: formData.authorId } },
				select: { id: true },
			});
		}

		// Create notifications in bulk
		if (targetUsers.length > 0) {
			await prisma.notification.createMany({
				data: targetUsers.map((user) => ({
					userId: user.id,
					title: "New Announcement",
					message: post.title,
					type: "NEW_POST",
					relatedEntityType: "POST",
					relatedEntityId: post.id,
				})),
			});
		}

		revalidatePath("/admin/posts");
		revalidatePath("/student/updates");

		return {
			success: true,
			message: "Post created successfully!",
			data: post,
		};
	} catch (error) {
		console.error("Failed to create post:", error);
		return {
			success: false,
			message: "Failed to create post. Please try again.",
		};
	}
}

export async function getPostsForStudents() {
	try {
		const posts = await prisma.post.findMany({
			where: {
				isPublished: true,
				OR: [{ targetAudience: "ALL" }, { targetAudience: "STUDENTS" }],
			},
			include: {
				author: true,
			},
			orderBy: { createdAt: "desc" },
		});

		return { success: true, data: posts };
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		return { success: false, message: "Failed to load posts." };
	}
}

export async function getAllPosts() {
	try {
		const posts = await prisma.post.findMany({
			include: {
				author: true,
			},
			orderBy: { createdAt: "desc" },
		});

		return { success: true, data: posts };
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		return { success: false, message: "Failed to load posts." };
	}
}

export async function deletePost(postId: string) {
	try {
		await prisma.post.delete({
			where: { id: postId },
		});

		revalidatePath("/admin/posts");

		return {
			success: true,
			message: "Post deleted successfully!",
		};
	} catch (error) {
		console.error("Failed to delete post:", error);
		return {
			success: false,
			message: "Failed to delete post. Please try again.",
		};
	}
}
