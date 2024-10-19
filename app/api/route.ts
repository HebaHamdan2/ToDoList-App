import {  NextResponse } from "next/server";

export async function GET(){
return NextResponse.json({msg:"get method hit"})
}