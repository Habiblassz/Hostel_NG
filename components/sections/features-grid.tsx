export default function FeaturesGrid() {
	const features = [
		{
			icon: (
				<svg
					fill="currentColor"
					height="32"
					viewBox="0 0 256 256"
					width="32"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204Zm97.08-117A172,172,0,0,0,18.92,87a8,8,0,0,0,10.16,12.37,156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87ZM205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Zm-32.26,35.76a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z" />
				</svg>
			),
			title: "High-Speed Wi-Fi",
			description: "Stay connected with our fast and reliable internet.",
		},
		{
			icon: (
				<svg
					fill="currentColor"
					height="32"
					viewBox="0 0 256 256"
					width="32"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
				</svg>
			),
			title: "24/7 Security",
			description: "Your safety is our priority with round-the-clock security.",
		},
		{
			icon: (
				<svg
					fill="currentColor"
					height="32"
					viewBox="0 0 256 256"
					width="32"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M247.35,148.85l-48-112A8,8,0,0,0,192,32H64a8,8,0,0,0-7.35,4.85l-48,112A8,8,0,0,0,16,160H120v48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V160h56v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,7.35-11.15ZM28.13,144,69.28,48H186.72l41.15,96Z" />
				</svg>
			),
			title: "Laundry Facilities",
			description: "Convenient on-site laundry services available.",
		},
		{
			icon: (
				<svg
					fill="currentColor"
					height="32"
					viewBox="0 0 256 256"
					width="32"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" />
				</svg>
			),
			title: "Dedicated Study Spaces",
			description: "Quiet and comfortable areas for focused study.",
		},
	];

	return (
		<section className="py-12 sm:py-16 lg:py-24">
			<div className="container-responsive">
				<div className="text-center mb-8 sm:mb-12">
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-balance">
						Everything You Need for a Great Stay
					</h2>
					<p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
						We provide top-notch facilities to make your life easier.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="card text-center flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
							<div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
								{feature.icon}
							</div>
							<h3 className="text-base sm:text-lg font-semibold mb-2">
								{feature.title}
							</h3>
							<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
