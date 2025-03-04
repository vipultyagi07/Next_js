import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const BASE_URL = process.env.API_BASE_URL;

        console.log("BASE_URL from backend:", BASE_URL);

        const body = await req.json();
        const response = await fetch(`${BASE_URL}/api/users/sign/in`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: response.status });
        }

        const data = await response.json();
        const token = data.jwtToken;

        console.log("Token from backend:", token);

        // ✅ Set cookie using NextResponse (NOT next/headers)
        const res = NextResponse.json({ message: "Login successful" }, { status: 200 });

        res.cookies.set("token", token, {
            httpOnly: true,
            secure: true, // Ensure HTTPS in production
            sameSite: "strict",
            path: "/",
            maxAge: 2 * 60 * 60, // 2 hours
        });

        return res;
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
    }
}
