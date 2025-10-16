"use client";

import { useState, useMemo } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { hostels } from "@/data/hostels";

type FilterType =
	| "all"
	| "single"
	| "double"
	| "dorm"
	| "studio"
	| "under-500"
	| "under-600"
	| "wifi"
	| "security"
	| "gym"
	| "study-room";

export default function Hostels() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

	const filteredHostels = useMemo(() => {
		return hostels.filter((hostel) => {
			// Search filter
			const matchesSearch =
				hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				hostel.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				hostel.location.toLowerCase().includes(searchTerm.toLowerCase());

			// Price range filter
			const minPrice = parseInt(hostel.priceRange.match(/\$(\d+)/)?.[1] || "0");
			const matchesPrice =
				minPrice >= priceRange[0] && minPrice <= priceRange[1];

			// Category filters
			const matchesFilters =
				selectedFilters.length === 0 ||
				selectedFilters.some((filter) => {
					switch (filter) {
						case "single":
							return hostel.roomTypes.includes("Single");
						case "double":
							return hostel.roomTypes.includes("Double");
						case "dorm":
							return hostel.roomTypes.includes("Dorm");
						case "studio":
							return hostel.roomTypes.includes("Studio");
						case "under-500":
							return minPrice <= 500;
						case "under-600":
							return minPrice <= 600;
						case "wifi":
							return hostel.amenities.includes("Wi-Fi");
						case "security":
							return hostel.amenities.includes("Security");
						case "gym":
							return hostel.amenities.includes("Gym");
						case "study-room":
							return hostel.amenities.includes("Study Room");
						default:
							return true;
					}
				});

			return matchesSearch && matchesPrice && matchesFilters;
		});
	}, [searchTerm, selectedFilters, priceRange]);

	const toggleFilter = (filter: FilterType) => {
		setSelectedFilters((prev) =>
			prev.includes(filter)
				? prev.filter((f) => f !== filter)
				: [...prev, filter]
		);
	};

	const clearFilters = () => {
		setSelectedFilters([]);
		setPriceRange([0, 1000]);
		setSearchTerm("");
	};

	return (
		<>
			<Header />
			<main className="flex-grow min-h-screen bg-gray-50 dark:bg-gray-900">
				<div className="container-responsive py-6 sm:py-8 lg:py-12">
					<div className="max-w-7xl mx-auto">
						{/* Header */}
						<div className="text-center mb-8 sm:mb-12">
							<h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight sm:text-3xl lg:text-4xl mb-3">
								Find Your Perfect Student Housing
							</h1>
							<p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
								Browse through our curated list of hostels to find the one that
								fits your needs and budget.
							</p>
						</div>

						{/* Search and Filters */}
						<div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6 sm:mb-8">
							{/* Search Input */}
							<div className="mb-4">
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<svg
											className="h-5 w-5 text-gray-400 dark:text-gray-500"
											fill="currentColor"
											viewBox="0 0 256 256">
											<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
										</svg>
									</span>
									<input
										className="w-full h-12 pl-10 pr-4 text-base bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-400"
										placeholder="Search by hostel name, description, or location..."
										type="search"
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
									/>
								</div>
							</div>

							{/* Price Range Filter */}
							<div className="mb-4">
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Price Range: ${priceRange[0]} - ${priceRange[1]}
								</label>
								<div className="flex items-center gap-4">
									<input
										type="range"
										min="0"
										max="1000"
										step="50"
										value={priceRange[0]}
										onChange={(e) =>
											setPriceRange([parseInt(e.target.value), priceRange[1]])
										}
										className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
									/>
									<input
										type="range"
										min="0"
										max="1000"
										step="50"
										value={priceRange[1]}
										onChange={(e) =>
											setPriceRange([priceRange[0], parseInt(e.target.value)])
										}
										className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
									/>
								</div>
							</div>

							{/* Filter Chips */}
							<div className="flex flex-wrap gap-2">
								{[
									{ key: "single" as FilterType, label: "Single Room" },
									{ key: "double" as FilterType, label: "Double Room" },
									{ key: "dorm" as FilterType, label: "Dorm Room" },
									{ key: "studio" as FilterType, label: "Studio" },
									{ key: "under-500" as FilterType, label: "Under $500" },
									{ key: "under-600" as FilterType, label: "Under $600" },
									{ key: "wifi" as FilterType, label: "Wi-Fi" },
									{ key: "security" as FilterType, label: "Security" },
									{ key: "gym" as FilterType, label: "Gym" },
									{ key: "study-room" as FilterType, label: "Study Room" },
								].map((filter) => (
									<button
										key={filter.key}
										onClick={() => toggleFilter(filter.key)}
										className={`px-3 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
											selectedFilters.includes(filter.key)
												? "bg-primary text-white shadow-md"
												: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
										}`}>
										{filter.label}
									</button>
								))}

								{(selectedFilters.length > 0 ||
									priceRange[0] > 0 ||
									priceRange[1] < 1000) && (
									<button
										onClick={clearFilters}
										className="px-3 py-2 text-sm font-medium rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
										Clear All
									</button>
								)}
							</div>
						</div>

						{/* Results Count */}
						<div className="mb-4 sm:mb-6">
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Showing {filteredHostels.length} of {hostels.length} hostels
								{selectedFilters.length > 0 &&
									` • ${selectedFilters.length} active filters`}
							</p>
						</div>

						{/* Hostels Grid */}
						<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{filteredHostels.map((hostel) => (
								<div
									key={hostel.id}
									className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
									<div className="relative">
										<div
											className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover"
											style={{ backgroundImage: `url(${hostel.image})` }}></div>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
										<div className="absolute top-3 right-3">
											<span className="bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full text-xs font-semibold text-gray-900 dark:text-white">
												⭐ {hostel.rating}
											</span>
										</div>
										<div className="absolute bottom-3 left-3">
											<span className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-semibold">
												{hostel.location}
											</span>
										</div>
									</div>

									<div className="p-4">
										<div className="flex justify-between items-start mb-2">
											<h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 flex-1">
												{hostel.name}
											</h3>
										</div>

										<p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 min-h-[2.5rem]">
											{hostel.description}
										</p>

										<div className="mb-3">
											<div className="text-sm font-semibold text-primary">
												{hostel.priceRange}
											</div>
										</div>

										{/* Room types chips */}
										<div className="mb-3 flex flex-wrap gap-1">
											{hostel.roomTypes.map((type) => (
												<span
													key={type}
													className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
													{type}
												</span>
											))}
										</div>

										{/* Amenities */}
										<div className="mb-4 flex flex-wrap gap-1">
											{hostel.amenities.slice(0, 3).map((amenity) => (
												<span
													key={amenity}
													className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
													{amenity}
												</span>
											))}
											{hostel.amenities.length > 3 && (
												<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
													+{hostel.amenities.length - 3} more
												</span>
											)}
										</div>

										<Link
											href={`/hostels/${hostel.id}`}
											className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
											View Details
										</Link>
									</div>
								</div>
							))}
						</div>

						{/* Empty State */}
						{filteredHostels.length === 0 && (
							<div className="text-center py-12">
								<div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">
									🏠
								</div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									No hostels found
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md mx-auto">
									We couldn't find any hostels matching your criteria. Try
									adjusting your search or filters.
								</p>
								<button onClick={clearFilters} className="btn-primary">
									Clear all filters
								</button>
							</div>
						)}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
