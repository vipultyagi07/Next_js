import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // ✅ Read the token correctly from cookies
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    console.log("🔍 Middleware Triggered:");
    console.log("📌 Pathname:", pathname);
    console.log("🔑 Token Exists:", token ? "✅ Yes" : "❌ No");

    // Define public routes that do NOT require authentication
    const publicRoutes = ["/login", "/register", "/forgot-password"];

    if (!token && !publicRoutes.includes(pathname)) {
        console.log("🚨 No token found! Redirecting to /login");
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (token && publicRoutes.includes(pathname)) {
        console.log("✅ Token found! Redirecting to /dashboard");
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

// ✅ Ensure middleware runs only on protected routes
export const config = {
    matcher: ["/dashboard", "/profile", "/settings"], // Protect only these routes
};
