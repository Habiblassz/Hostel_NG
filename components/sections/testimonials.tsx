import Image from "next/image";

export default function Testimonials() {
	const testimonials = [
		{
			name: "Sarah M.",
			role: "Great Experience",
			content:
				"The hostel staff is incredibly friendly and helpful. The rooms are clean and well-maintained. I've made so many friends here!",
			image:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuB4TkWhkPrH8RuGFw6zeZNpZwouv2xlmGsesF0qoZBhc6sbfD-lsw56yfNq0hlxzJiBvQAiMUc9YlJRPrVlWcLGNg6eHmzdaIOXXPqD201eL6piBndzQTzfR4A1qbYrxYmCr-UgoT79namYAhlEEGwX6gexB30-nPRXWWfSfJj8aTpbdQzbbLAldAIjlbauONGAqmhbJH8W7wDhEg-3CAanIUxG7k4QOg4CitNHrimxqBKqJcdJuNii7s1YcWx1WAwoLtO8hMlbPC8",
		},
		{
			name: "Muhammed L.",
			role: "Highly Recommended",
			content:
				"I've had a fantastic experience. The location is ideal, close to campus and local amenities. The study spaces are perfect for my coursework.",
			image:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuA6ADw1RexIH863nfUyc_ZbI3gN3eKWzHHye3j5DZlyevjeljCYZaug_oxXwyk4Cn8gETKBE3pad9hzuHdJ8zmcu_Hg0PxWmUxiZklIhXOqtO2fARxjOJ7_DR541n-mGGkJaGcyvdlr7Ets_D-B01BecoAk7G90GBsjDHVpS7aSULk3AWNhpi9WfWh8LPSW_i4bI4gCwa7utHPSRHog4UucLpF7ffq4a39ezRq0Y7Yb5LdAvgEHrUPRCpge2-2mtT8nDiL_xnJvBPA",
		},
	];

	return (
		<section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-background-dark">
			<div className="container-responsive">
				<div className="text-center mb-8 sm:mb-12">
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-balance">
						What Our Students Say
					</h2>
					<p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Real stories from students who call our hostel home.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="card flex flex-col sm:flex-row gap-4 sm:gap-6 hover:shadow-lg transition-shadow duration-300">
							<Image
								alt={testimonial.name}
								className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 mx-auto sm:mx-0"
								src={testimonial.image}
								width={100}
								height={100}
							/>
							<div className="flex-1 text-center sm:text-left">
								<p className="text-sm font-medium text-primary mb-1">
									{testimonial.name}
								</p>
								<p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									&quot;{testimonial.role}&quot;
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
									{testimonial.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
