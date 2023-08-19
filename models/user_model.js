import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,`username is required`],
    },
    email:{
        type:String,
        required:[true,`email is required`],
    },
    password:{
        type:String,
        required:[true,`password is required`],
    }
},{timestamps:true});
export const user_model=mongoose.model("User",userschema);

