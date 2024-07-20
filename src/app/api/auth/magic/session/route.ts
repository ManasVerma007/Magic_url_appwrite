import { NextResponse } from "next/server";
import appwriteService from "@/appwrite/config";

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const { userId, secret } = body;
        console.log({ userId, secret });
        const result = await appwriteService.createMagicSession(userId, secret);
        return NextResponse.json(result);
    } catch (error: any) {
        console.log("Error in creating session:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}