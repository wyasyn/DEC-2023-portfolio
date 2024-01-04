import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        if (!name) {
            return NextResponse.json({
                body: null,
                message: "Please provide your name!",
            });
        }
        if (!email) {
            return NextResponse.json({
                body: null,
                message: "Please provide your email!",
            });
        }
        if (!message) {
            return NextResponse.json({
                body: null,
                message: "Please provide a message!",
            });
        }
        return NextResponse.json({
            body,
            message: "am ok",
        });
    } catch (error) {
        return NextResponse.json({
            body: null,
            message: "not ok",
        });
    }
}
