"use client";

import { useState } from "react";

export default function RoomRequest() {
	const [formData, setFormData] = useState({
		hostel: "",
		roomType: "",
		sessionDuration: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Room request submitted:", formData);
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
								required>
								<option value="">Choose a hostel</option>
								<option value="lakeside">Lakeside Residence</option>
								<option value="mountain-view">Mountain View Hall</option>
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
								required>
								<option value="">Choose room type</option>
								<option value="single">Single Room</option>
								<option value="double">Double Room</option>
								<option value="studio">Studio Apartment</option>
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
								required>
								<option value="">Select duration</option>
								<option value="fall-2024">Fall 2024</option>
								<option value="spring-2025">Spring 2025</option>
								<option value="full-year">
									Full Academic Year (2024-2025)
								</option>
							</select>
						</div>

						<div className="flex justify-end">
							<button
								type="submit"
								className="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-md">
								Submit Request
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
