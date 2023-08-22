import mongoose from "mongoose";

export const blogschema=new mongoose.Schema({
   title:{
    type:String,
    required:[true,`title is required`],
   } ,
   description:{
    type:String,
    requred:[true,`description is required`],
   },
   image:{
    type:String,
    required:[true,`image is required`],
   },
   user:{
      type:mongoose.Types.ObjectId,
      ref:'User',
      require:[true,'user id required'],
   },
},{timestamps:true});
export const blog_model=mongoose.model("blog",blogschema);