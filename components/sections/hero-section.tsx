"use	client";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="relative w-full h-[50vh] min-h-[300px] sm:h-[60vh] sm:min-h-[400px] flex items-center justify-center text-center bg-cover bg-center hero-bg">
			<div className="absolute inset-0 bg-black/40 sm:bg-black/10"></div>
			<div className="relative z-10 container-responsive max-w-4xl mx-auto">
				<h1 className="text-2xl font-extrabold text-white tracking-tight sm:text-4xl md:text-6xl px-2">
					Comfortable, Secure, and Affordable Hostel Living
				</h1>
				<p className="mt-3 sm:mt-4 text-sm text-gray-200 sm:text-lg px-4">
					Find your perfect student accommodation with us, offering a safe and
					friendly environment.
				</p>
				<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
					<Link href="/hostels" className="btn-primary order-2 sm:order-1">
						View Hostels
					</Link>
					<Link href="/login" className="btn-secondary order-1 sm:order-2">
						Request a Room
					</Link>
				</div>
			</div>

			<style jsx>{`
				.hero-bg {
					background-image: linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.6) 0%,
							rgba(0, 0, 0, 0.3) 40%,
							rgba(0, 0, 0, 0.1) 100%
						),
						url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbMMh0j3wW_Sh0K9yVguVdqlevR5Q83iE0UJPemwqHXkotf3GXkwCtAmevFkesPnmxSufdYwAQXrH4q03W3LdCB-pQmAR1Tg6_RahV2fhpXIvgoxvmZz4u5mCi8_SQRbD2103AGtyaWxu9mauT_KV70GoDP7cobd6dxWwXbcEtAAKzOOxbK4Tj6huiJ6El5ViuLywXGyceNH87uNe9rPwKis9JBJSUHIOEqIkJAOFrOeDTgtOG1zS5Fd-ScKv7KxqIx-1B62AEgN0");
					background-position: center;
					background-size: cover;
				}

				@media (min-width: 768px) {
					.hero-bg {
						background-image: linear-gradient(
								0deg,
								rgba(0, 0, 0, 0.5) 0%,
								rgba(0, 0, 0, 0) 40%
							),
							url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbMMh0j3wW_Sh0K9yVguVdqlevR5Q83iE0UJPemwqHXkotf3GXkwCtAmevFkesPnmxSufdYwAQXrH4q03W3LdCB-pQmAR1Tg6_RahV2fhpXIvgoxvmZz4u5mCi8_SQRbD2103AGtyaWxu9mauT_KV70GoDP7cobd6dxWwXbcEtAAKzOOxbK4Tj6huiJ6El5ViuLywXGyceNH87uNe9rPwKis9JBJSUHIOEqIkJAOFrOeDTgtOG1zS5Fd-ScKv7KxqIx-1B62AEgN0");
					}
				}
			`}</style>
		</section>
	);
}
