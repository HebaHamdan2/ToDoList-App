import {  NextResponse } from "next/server";
import TodoModel from "@/lib/models/TodoModel"
import {ConnectDB} from "@/lib/config/db"
const LoadDB=async()=>{
    await ConnectDB();
}
LoadDB();
export async function GET(){
    const todos=await TodoModel.find({});
return NextResponse.json({todos:todos})
}
export async function POST(request:Request){
    const {title ,description}=await request.json();
    await TodoModel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo Created"})
    }
    