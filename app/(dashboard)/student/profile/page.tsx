"use client";

import { useState } from "react";
import { Student } from "@/types";

const mockStudent: Student = {
	id: "1",
	name: "Sarah Johnson",
	email: "sarah.johnson@student.edu",
	studentId: "2021001",
	avatar:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuAGa80-4xnBQck8M-p5zJDygpRsuyU7rMY9E-KhmToaZqTpAh4ql9bgLvvLqYCUCZdbfzADq0pEfih_gSMPyQgDSEKhE6NFIj7NSR3_NQ9Gb85kEsqE43mjAIuKsDsPmHV86kzOWvxDcsIEtqG5kgMwHpe1X53BO6M3EraxFDWFiw0mdRMr2mfbIruns0G2jHJ40dAYk70ewzaK1beGml7-SVeacvoZTMaQq5iPKygxfpwVmw46DHKBwfShs9HP9dI3dykbAWYSSQE",
};

export default function StudentProfile() {
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState({
		name: mockStudent.name,
		email: mockStudent.email,
		phone: "+1 (555) 123-4567",
		emergencyContact: "+1 (555) 987-6543",
		address: "123 University Ave, Campus City, CC 12345",
	});

	const handleSave = () => {
		setIsEditing(false);
		// In a real app, you would save to the backend here
	};

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div className="max-w-4xl mx-auto space-y-8">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
						Profile
					</h1>
					<p className="text-zinc-500 dark:text-zinc-400 mt-1">
						Manage your personal information
					</p>
				</div>
				<button
					onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
					className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors">
					<span className="material-symbols-outlined">
						{isEditing ? "save" : "edit"}
					</span>
					<span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
				</button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Profile Card */}
				<div className="lg:col-span-1">
					<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
						<div className="text-center">
							<div
								className="mx-auto w-32 h-32 rounded-full bg-cover bg-center mb-4 border-4 border-primary/20"
								style={{ backgroundImage: `url(${mockStudent.avatar})` }}
							/>
							<h2 className="text-xl font-bold text-zinc-900 dark:text-white">
								{mockStudent.name}
							</h2>
							<p className="text-zinc-500 dark:text-zinc-400 mt-1">
								Student ID: {mockStudent.studentId}
							</p>
							<div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 text-sm font-medium">
								<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
								Active
							</div>
						</div>
					</div>
				</div>

				{/* Information Form */}
				<div className="lg:col-span-2">
					<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">
							Personal Information
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Full Name
								</label>
								{isEditing ? (
									<input
										type="text"
										value={formData.name}
										onChange={(e) => handleChange("name", e.target.value)}
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
									/>
								) : (
									<p className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white">
										{formData.name}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Student ID
								</label>
								<p className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white">
									{mockStudent.studentId}
								</p>
							</div>

							<div>
								<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Email Address
								</label>
								{isEditing ? (
									<input
										type="email"
										value={formData.email}
										onChange={(e) => handleChange("email", e.target.value)}
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
									/>
								) : (
									<p className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white">
										{formData.email}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Phone Number
								</label>
								{isEditing ? (
									<input
										type="tel"
										value={formData.phone}
										onChange={(e) => handleChange("phone", e.target.value)}
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
									/>
								) : (
									<p className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white">
										{formData.phone}
									</p>
								)}
							</div>

							<div className="md:col-span-2">
								<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Emergency Contact
								</label>
								{isEditing ? (
									<input
										type="tel"
										value={formData.emergencyContact}
										onChange={(e) =>
											handleChange("emergencyContact", e.target.value)
										}
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
									/>
								) : (
									<p className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white">
										{formData.emergencyContact}
									</p>
								)}
							</div>

							<div className="md:col-span-2">
								<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Address
								</label>
								{isEditing ? (
									<textarea
										value={formData.address}
										onChange={(e) => handleChange("address", e.target.value)}
										rows={3}
										className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
									/>
								) : (
									<p className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white">
										{formData.address}
									</p>
								)}
							</div>
						</div>

						{isEditing && (
							<div className="flex gap-3 mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
								<button
									onClick={handleSave}
									className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
									Save Changes
								</button>
								<button
									onClick={() => setIsEditing(false)}
									className="px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
									Cancel
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
