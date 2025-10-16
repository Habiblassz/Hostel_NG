"use server";
import { notFound } from "next/navigation";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { hostels } from "@/data/hostels";
import RequestRoomButton from "./requestionRoomButton";
import Link from "next/link";

interface HostelPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function HostelPage({ params }: HostelPageProps) {
	const { slug } = await params;

	const hostel = hostels.find((h) => h.id === slug);

	if (!hostel) {
		notFound();
	}

	return (
		<>
			<Header />
			<main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="max-w-6xl mx-auto">
					<nav className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
						<Link
							href="/hostels"
							className="hover:text-primary transition-colors">
							Hostels
						</Link>
						<span className="mx-2">›</span>
						<span className="text-gray-900 dark:text-white">{hostel.name}</span>
					</nav>

					<h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
						{hostel.name}
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
							<div
								className="absolute inset-0 bg-cover bg-center"
								style={{ backgroundImage: `url(${hostel.image})` }}></div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="relative w-full h-48 rounded-xl overflow-hidden shadow-md">
									<div
										className="absolute inset-0 bg-cover bg-center"
										style={{ backgroundImage: `url(${hostel.image})` }}></div>
								</div>
							))}
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
								<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
									About {hostel.name}
								</h2>
								<p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
									{hostel.description}
								</p>

								<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
									Amenities
								</h2>
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
									{[
										"Wi-Fi",
										"Power Backup",
										"Water Supply",
										"24/7 Security",
										"Community Events",
										"Study Room",
									].map((amenity) => (
										<div key={amenity} className="flex items-center gap-3">
											<span className="material-symbols-outlined text-primary text-2xl">
												check_circle
											</span>
											<span className="font-medium">{amenity}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="space-y-6">
							{[
								{
									type: "Single Room",
									desc: "Private room with a single bed, desk, and wardrobe.",
									price: "$450",
									status: "Available",
								},
								{
									type: "Double Room",
									desc: "Shared room for two students with individual beds.",
									price: "$300",
									status: "Available",
								},
								{
									type: "Dorm Room",
									desc: "Shared room for multiple students with bunk beds.",
									price: "$250",
									status: "2 spots left",
								},
							].map((room, index) => (
								<div
									key={index}
									className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
									<h3 className="text-lg font-bold text-gray-900 dark:text-white">
										{room.type}
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
										{room.desc}
									</p>
									<div className="flex items-center justify-between mt-4">
										<p className="font-bold text-primary">
											{room.price}
											<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
												/month
											</span>
										</p>
										<span
											className={`text-sm font-medium px-2 py-1 rounded-full ${
												room.status === "Available"
													? "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50"
													: "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/50"
											}`}>
											{room.status}
										</span>
									</div>
								</div>
							))}

							{/* button */}
							<RequestRoomButton />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
