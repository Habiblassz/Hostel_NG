import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function About() {
	const teamMembers = [
		{
			name: "Ethan Harper",
			role: "General Manager",
			image:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuCTDe5KhTqAfo7K8XHBeovQAFI3iCqCXGsVG6SbaI7o4FfhG1d2FudCDBUAzPY1e4FwevbfImHriRLVdwqFmry-rZb9LsCiIVvM3gC1DEWhoIEcuZYnomwDuTQQwb9cygnZOzcOOi5u9rEmNM8mBskj490S0H4AOnu3kIC39v2TRn2B8-Vf1xHZRLER_PmMpfwebiH8gyOw6M7Gd0J3mQOy83O1fRubqUUWk6IvT5c6bJaY17yFJqO8Lngnanp9kuL9rJfEeInQKJ4",
		},
		{
			name: "Sophia Clark",
			role: "Resident Advisor",
			image:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuCe3PsQ1Mh6B9eqX2R2oUm5kluZFG2ZdX0KoCBG9oZg7akVUZ8RyzaBb2UVZtlqfvL2sMWR_cw8rJ1xKzbBsIRizzRjcaa3vrgYgsad1Z2yXqWG4lh7zyvhExbT2JTvRV0ekTZkuMSWjDlse9XDHg6XJOJY7UMUCZ_FmA0IUk_3WCrRfsfvC_tsZkdwEBg5qEWxzLKXOzyotYu3ZwjC9PGhjJS60zTGPZvehGxcspBWXTzYflfjb8EuDzGcOxvxpW2_EtpTLRSsE4I",
		},
		{
			name: "Liam Bennett",
			role: "Facilities Manager",
			image:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuD9AFhARxs_yO0sdEcasA97c2wJPet1fiK3DWHMn1lxr35e-kj7AVwnPF0Z9rsxlGtCB_aBTGGHxQIDD66qfJLLUV6vTr_fwa5ZhCRx3L914yiJvJIoarO5amsa1LFM6s95bTL5t_l3nOhhZmCXgfwmLQFbR-Ic73bh98m4QZYg6zVSbNHJ88IyvftpIRx_50Rui6e1kGU5M8FBQKbUnz247BkEC35qAbKX8Op0sPYJWQLLh16cCYeEnDujJCzspKM1-MJQ5IT_4zM",
		},
	];

	const values = [
		{
			icon: "king_bed",
			title: "Comfort",
			description:
				"We prioritize creating a comfortable and welcoming atmosphere for all our residents.",
		},
		{
			icon: "security",
			title: "Security",
			description:
				"We ensure a secure living environment with 24/7 surveillance and trained staff.",
		},
		{
			icon: "groups",
			title: "Community",
			description:
				"We foster a vibrant community through social events and shared spaces.",
		},
	];

	return (
		<>
			<Header />
			<main className="flex-grow">
				{/* Hero Section */}
				<section className="relative h-60 sm:h-80 flex items-center justify-center">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{
							backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVcPHp42maUDNwv1s8ERDENtAX2jnTB-NLEAV68iA1dPVGrvgzGhYlsoD2WBWMe_FG0sAz2OrOM_mbzUg7ahKMsrLoYYuUmwlrtJJ6lG2Z_HISfb1K7AsLNgQiLCXia8QPN9eeSQ3j3nb0VToHkw5IJxsRYwp7JvXtL1VvkFVLhb8bvOVxkYu4bXrmdYorKBm-lBAA7VBXWrawRi6Vs58T53bfF76XvqNkSanic4C5VF-Sx_MH114nKP-bLEu5CAw8Iu9YxRvSz5Y")`,
						}}></div>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="relative z-10 text-center text-white px-4">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
							About Us
						</h1>
						<p className="text-lg sm:text-xl max-w-2xl mx-auto">
							Learn more about our mission, values, and the team behind Student
							Housing
						</p>
					</div>
				</section>

				{/* Who We Are Section */}
				<section className="py-12 sm:py-16 lg:py-24" id="who-we-are">
					<div className="container-responsive">
						<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
							<div className="space-y-6">
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
									Who We Are
								</h2>
								<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
									At Student Housing, we provide a safe, comfortable, and
									inspiring living environment for students. Our modern
									facilities and dedicated staff ensure a supportive community
									where students can thrive both academically and socially.
									We're more than just a place to stay; we're a place to grow.
								</p>
								<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
									Located in the heart of the city, we offer easy access to
									universities, public transport, and local amenities, making
									student life convenient and enjoyable. Our commitment to
									excellence has made us the preferred choice for students
									seeking quality accommodation.
								</p>
								<div className="pt-4">
									<Link href="/hostels" className="btn-primary">
										Explore Our Hostels
									</Link>
								</div>
							</div>
							<div
								className="h-80 w-full rounded-2xl bg-cover bg-center shadow-xl"
								style={{
									backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5nZIKrgLMu96j1cXr_2OPB_TM8l2c3W1VoV_qswfF1SFb8gLYENg2xQcQOcPnuDmZ4Ed1cUsCgW_ty7Tl4Df-A92HgzXXg5msyyCeLXJorKpWX4gXKDZkm5eOGecOC_hdjo_fooLMiIqWLSGZI8bgZg7hwinBW0KOXXEZ5r1xDrPcMglRohBoeKtOSlmBEQl1Oq7OquaZ2ODS8OVpK2rL3_2gctFWxqOhc8bWYx3ZBNWu0qalAz0Hh-oxfYPJzzd6RJxnDtOQ0qo")`,
								}}></div>
						</div>
					</div>
				</section>

				{/* Mission & Values Section */}
				<section
					className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900"
					id="mission-values">
					<div className="container-responsive">
						<div className="text-center mb-12 sm:mb-16">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
								Our Mission & Values
							</h2>
							<p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
								Our core values guide everything we do, ensuring we provide the
								best possible experience for our residents.
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
							{values.map((value, index) => (
								<div
									key={index}
									className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
									<div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary mb-4">
										<span className="material-symbols-outlined text-4xl">
											{value.icon}
										</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
										{value.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
										{value.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Management Team Section */}
				<section className="py-12 sm:py-16 lg:py-24" id="management">
					<div className="container-responsive">
						<div className="text-center mb-12 sm:mb-16">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
								Meet the Management
							</h2>
							<p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
								Our dedicated team is here to make your stay exceptional and
								ensure you have the best student living experience.
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
							{teamMembers.map((member, index) => (
								<div key={index} className="text-center group">
									<div className="relative w-40 h-40 mx-auto mb-6">
										<div
											className="w-full h-full rounded-full bg-cover bg-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
											style={{ backgroundImage: `url(${member.image})` }}></div>
										<div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										{member.name}
									</h3>
									<p className="text-primary font-medium">{member.role}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 mt-3 max-w-xs mx-auto">
										{member.role === "General Manager" &&
											"Oversees all operations and ensures quality standards."}
										{member.role === "Resident Advisor" &&
											"Provides support and guidance to all residents."}
										{member.role === "Facilities Manager" &&
											"Maintains all hostel facilities and amenities."}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-12 sm:py-16 lg:py-24 bg-primary text-white">
					<div className="container-responsive text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
							Ready to Find Your New Home?
						</h2>
						<p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
							Join hundreds of satisfied students who have found their perfect
							accommodation with us.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/hostels"
								className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
								Browse Hostels
							</Link>
							<Link
								href="/contact"
								className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
								Contact Us
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
