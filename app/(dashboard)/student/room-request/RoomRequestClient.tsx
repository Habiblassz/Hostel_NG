"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createRoomRequest } from "@/lib/actions/room-request";

interface RoomRequestClientProps {
	userId: string;
}

export default async function RoomRequestClient({
	userId,
}: RoomRequestClientProps) {
	const [formData, setFormData] = useState({
		hostel: "",
		roomType: "",
		sessionDuration: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!userId) {
			setError("You must be logged in to submit a request.");
			return;
		}

		setLoading(true);
		setError("");
		setSuccess("");

		try {
			const result = await createRoomRequest({
				studentId: userId,
				hostelId: formData.hostel,
				roomType: formData.roomType,
				sessionDuration: formData.sessionDuration,
			});

			if (result.success) {
				setSuccess(result.message);
				setFormData({ hostel: "", roomType: "", sessionDuration: "" });
				// Redirect to dashboard after 2 seconds
				setTimeout(() => {
					router.push("/student/dashboard");
					router.refresh();
				}, 2000);
			} else {
				setError(result.message);
			}
		} catch (err) {
			setError("An unexpected error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="max-w-2xl mx-auto">
			<h2 className="text-3xl font-bold tracking-tight mb-8">Request Room</h2>

			{/* Success Message */}
			{success && (
				<div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
					<div className="flex items-center">
						<span className="material-symbols-outlined text-green-500 mr-2">
							check_circle
						</span>
						<p className="text-green-800 dark:text-green-300">{success}</p>
					</div>
				</div>
			)}

			{/* Error Message */}
			{error && (
				<div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
					<div className="flex items-center">
						<span className="material-symbols-outlined text-red-500 mr-2">
							error
						</span>
						<p className="text-red-800 dark:text-red-300">{error}</p>
					</div>
				</div>
			)}

			<div className="space-y-12">
				<div className="bg-white dark:bg-background-dark p-6 md:p-8 rounded-lg shadow-sm">
					<div className="flex items-center gap-4 mb-6">
						<div className="w-10 h-10 flex-shrink-0 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
							<span className="text-lg font-bold text-primary">1</span>
						</div>
						<h3 className="text-xl font-semibold">Hostel & Room Selection</h3>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
								htmlFor="hostel">
								Select Hostel
							</label>
							<select
								id="hostel"
								name="hostel"
								value={formData.hostel}
								onChange={handleChange}
								className="form-select block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-primary focus:ring-primary transition"
								required
								disabled={loading}>
								<option value="">Choose a hostel</option>
								<option value="maple-residence">Maple Residence</option>
								<option value="oak-hall">Oak Hall</option>
								<option value="city-center">City Center Apartments</option>
							</select>
						</div>

						<div>
							<label
								className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
								htmlFor="roomType">
								Select Room Type
							</label>
							<select
								id="roomType"
								name="roomType"
								value={formData.roomType}
								onChange={handleChange}
								className="form-select block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-primary focus:ring-primary transition"
								required
								disabled={loading}>
								<option value="">Choose room type</option>
								<option value="SINGLE">Single Room</option>
								<option value="DOUBLE">Double Room</option>
								<option value="STUDIO">Studio Apartment</option>
							</select>
						</div>

						<div>
							<label
								className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
								htmlFor="sessionDuration">
								Session Duration
							</label>
							<select
								id="sessionDuration"
								name="sessionDuration"
								value={formData.sessionDuration}
								onChange={handleChange}
								className="form-select block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-primary focus:ring-primary transition"
								required
								disabled={loading}>
								<option value="">Select duration</option>
								<option value="FALL_2024">Fall 2024</option>
								<option value="SPRING_2025">Spring 2025</option>
								<option value="FULL_YEAR">
									Full Academic Year (2024-2025)
								</option>
							</select>
						</div>

						<div className="flex justify-end">
							<button
								type="submit"
								disabled={loading || !userId}
								className="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
								{loading ? (
									<div className="flex items-center">
										<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
										Submitting...
									</div>
								) : (
									"Submit Request"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
