import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";


export default async function connectDB(){
    try{
         await mongoose.connect(DB_URL)
         console.log("mongoDB connected")
    }
    catch(error){
        console.log("mongoose connection failed")
        console.log(error)
    }
}