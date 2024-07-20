import { NextResponse } from "next/server";
import appwriteService from "@/appwrite/config";


export const POST = async(request: Request) => {
    try{
        const body = await request.json();
        const { email, redirectUrl } = body;
        console.log({ email, redirectUrl });       
        const result = await appwriteService.createMagicURLToken( email, redirectUrl);
        return NextResponse.json(result);
    }
    catch(error: any){
        console.log(error);
    }
}



