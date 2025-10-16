"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Contact form submitted:", formData);
		alert("Thank you for your message! We will get back to you soon.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<Header />
			<main className="flex-grow min-h-screen bg-gray-50 dark:bg-gray-900">
				{/* Hero Section */}
				<section className="bg-primary text-white py-12 sm:py-16">
					<div className="container-responsive text-center">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
							Get In Touch
						</h1>
						<p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
							Have questions about our hostels? We&apos;re here to help you find
							your perfect student accommodation.
						</p>
					</div>
				</section>

				<div className="container-responsive py-8 sm:py-12 lg:py-16">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
						{/* Contact Information */}
						<div className="lg:col-span-1 space-y-6">
							<div>
								<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
									Contact Information
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-6">
									Reach out to us through any of the following channels. We
									typically respond within 24 hours.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<span className="material-symbols-outlined text-primary">
											location_on
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 dark:text-white">
											Our Location
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											123 University Avenue
											<br />
											Hostel-NG, CT 12345
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<span className="material-symbols-outlined text-primary">
											phone
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 dark:text-white">
											Phone Number
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											(+234) 56 7890 123
											<br />
											Mon-Fri from 8am to 6pm
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<span className="material-symbols-outlined text-primary">
											mail
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 dark:text-white">
											Email Address
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											contact@hostelng.com
											<br />
											info@hostelng.com
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<span className="material-symbols-outlined text-primary">
											schedule
										</span>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 dark:text-white">
											Office Hours
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											Monday - Friday: 8:00 - 18:00
											<br />
											Saturday: 9:00 - 16:00
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-2">
							<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
								<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
									Send us a Message
								</h2>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Full Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												required
												value={formData.name}
												onChange={handleChange}
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
												placeholder="Your full name"
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Email Address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
												placeholder="your.email@example.com"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Subject *
										</label>
										<select
											id="subject"
											name="subject"
											required
											value={formData.subject}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
											<option value="">Select a subject</option>
											<option value="general">General Inquiry</option>
											<option value="booking">Room Booking</option>
											<option value="tour">Campus Tour</option>
											<option value="support">Technical Support</option>
											<option value="other">Other</option>
										</select>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											required
											rows={6}
											value={formData.message}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-vertical"
											placeholder="Tell us how we can help you..."
										/>
									</div>

									<button
										type="submit"
										className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg">
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
