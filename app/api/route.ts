import { NextRequest, NextResponse } from "next/server";
import TodoModel from "@/lib/models/TodoModel";
import { ConnectDB } from "@/lib/config/db";

const LoadDB = async () => {
    await ConnectDB();
};
LoadDB();

const setCorsHeaders = (response:NextResponse) => {
    response.headers.set("Access-Control-Allow-Origin", "*"); 
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
};

export async function GET() {
    const todos = await TodoModel.find({});
    const response = NextResponse.json({ todos: todos });
    return setCorsHeaders(response);
}

export async function POST(request: Request) {
    const { title, description } = await request.json();
    await TodoModel.create({
        title,
        description
    });
    const response = NextResponse.json({ msg: "Todo Created" });
    return setCorsHeaders(response);
}

export async function DELETE(request: NextRequest) {
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndDelete(mongoId);
    const response = NextResponse.json({ msg: "Todo Deleted Successfully" });
    return setCorsHeaders(response);
}

export async function PATCH(request: NextRequest) {
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndUpdate(mongoId, {
        $set: {
            isCompleted: true
        }
    });
    const response = NextResponse.json({ msg: "Todo Completed Successfully" });
    return setCorsHeaders(response);
}

export async function OPTIONS() {
    const response = NextResponse.json({});
    return setCorsHeaders(response);
}
