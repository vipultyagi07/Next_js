import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === "/forgot-password") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next(); // Allow the request to proceed for other routes
}

// Apply middleware only to relevant routes
export const config = {
    matcher: ["/forgot-password"], // Ensures middleware only runs for this route
};
