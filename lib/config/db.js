import mongoose from "mongoose"

export const ConnectDB=async()=>{
    await mongoose.connect(process.env.MONGO_DG_URL);
    console.log("DB connected");
}