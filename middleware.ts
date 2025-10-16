import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	});

	const { pathname } = request.nextUrl;

	// Define protected routes and their required roles
	const protectedRoutes = {
		"/admin": ["admin"],
		"/student": ["student", "admin"], // admin can access student routes if needed
	};

	// Check if the current path is protected
	const isProtectedRoute = Object.keys(protectedRoutes).some((route) =>
		pathname.startsWith(route)
	);

	if (isProtectedRoute) {
		// If user is not authenticated, redirect to login
		if (!token) {
			const loginUrl = new URL("/login", request.url);
			loginUrl.searchParams.set("callbackUrl", encodeURI(request.url));
			return NextResponse.redirect(loginUrl);
		}

		// Check if user has the required role for the route
		const userRole = token.role as string;
		const requiredRoles =
			Object.entries(protectedRoutes).find(([route]) =>
				pathname.startsWith(route)
			)?.[1] || [];

		if (!requiredRoles.includes(userRole)) {
			// User doesn't have required role - redirect to unauthorized or their dashboard
			const redirectUrl =
				userRole === "admin" ? "/admin/dashboard" : "/student/dashboard";
			return NextResponse.redirect(new URL(redirectUrl, request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/admin/:path*",
		"/student/:path*",
		// Add other protected routes here
	],
};
