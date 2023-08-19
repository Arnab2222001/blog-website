import mongoose from "mongoose";

export const blogschema=mongoose.Schema({
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
   }
},{timestamps:true});

const blog_model=mongoose.model("blog",blogschema);