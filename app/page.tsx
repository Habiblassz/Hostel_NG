"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/sections/hero-section";
import FeaturesGrid from "@/components/sections/features-grid";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<FeaturesGrid />
				<Testimonials />
			</main>
			<Footer />
		</>
	);
}
