import {  NextResponse } from "next/server";
import TodoModel from "@/lib/models/TodoModel"
import {ConnectDB} from "@/lib/config/db"
const LoadDB=async()=>{
    await ConnectDB();
}
LoadDB();
export async function GET(){
return NextResponse.json({msg:"get method hit"})
}
export async function POST(request){
    const {title ,description}=await request.json();
    await TodoModel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo Created"})
    }
    