export const SITE_CONFIG = {
	name: "Hostel-NG",
	description: "Comfortable, Secure, and Affordable Hostel Living",
	url: "http://localhost:3000",
	ogImage:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuDbMMh0j3wW_Sh0K9yVguVdqlevR5Q83iE0UJPemwqHXkotf3GXkwCtAmevFkesPnmxSufdYwAQXrH4q03W3LdCB-pQmAR1Tg6_RahV2fhpXIvgoxvmZz4u5mCi8_SQRbD2103AGtyaWxu9mauT_KV70GoDP7cobd6dxWwXbcEtAAKzOOxbK4Tj6huiJ6El5ViuLywXGyceNH87uNe9rPwKis9JBJSUHIOEqIkJAOFrOeDTgtOG1zS5Fd-ScKv7KxqIx-1B62AEgN0",
	links: {
		github: "https://github.com/hostel-ng",
	},
};

export const NAVIGATION = {
	main: [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Hostels", href: "/hostels" },
		{ name: "Contact", href: "/contact" },
	],
	student: [
		{ name: "Dashboard", href: "/student/dashboard" },
		{ name: "Request Room", href: "/student/room-request" },
		{ name: "Access Card", href: "/student/access-card" },
		{ name: "Updates", href: "/student/updates" },
	],
	admin: [
		{ name: "Requests", href: "/admin/requests" },
		{ name: "Access Cards", href: "/admin/access-cards" },
		{ name: "Posts", href: "/admin/posts" },
		{ name: "Students", href: "/admin/students" },
	],
};
