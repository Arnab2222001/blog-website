import mongoose from "mongoose";
import {blog_model} from "../models/blog_model.js";
import { user_model } from "../models/user_model.js";
//get all blogs
export const getallblogescontroller=async(req,res)=>{

    try{
        const blogs=await blog_model.find({});
        if(!blogs){
            return res.status(200).send({
                success:false,
                message:`no blogs found`
            });
        }
        return res.status(200).send({
            success:true,
            blogcount:blogs.length,
            message:`all bloges list`,
            blogs
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:`error while getting blogs`,
            error
        });
    }
};
//create blog 
export const createblogcontroller=async(req,res)=>{
try{
    const {title,description,image,user}=req.body;
    //validation message also checking user
    if(!title||!description||!image||!user){
        return res.status(400).send({
            success:false,
            message:`please provide all fileds`
        });
    }
    const exisitinguser=await user_model.findById(user);
    if(!exisitinguser){
        return res.status(404).send({
            success:false,
            message:`unable to find the user`,
        });
    }
    const newblog=new blog_model({title,description,image,user});
    //using session to uplode the blog
    const session= await mongoose.startSession();
    //using session to update the session
     session.startTransaction();
     await newblog.save({session});
     //updateing the exisitinguser function
     exisitinguser.blogs.push(newblog);
     await exisitinguser.save({session});
        await session.commitTransaction();
    await newblog.save();
    return res.status(201).send({
    success:true,
        message:`blog created`,
        newblog,
    });
}
catch(error){
    console.log(error);
    return res.status(500).send({
        success:false,
        message:`error in blog createation`,
        error,
    });
}

}
//update the blogs
export const updateblogcontroller= async(req,res)=>{
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
        const blog = await blog_model.findByIdAndUpdate(
          id,
          { ...req.body },
          { new: true }
        );
        return res.status(200).send({
          success: true,
          message: "Blog Updated!",
          blog,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).send({
          success: false,
          message: "Error WHile Updating Blog",
          error,
        });
    }

}
//delete the blog 
export const deletecontroller=async(req,res)=>{
    try{
        const {id}=req.params;
       const blog= await blog_model.findByIdAndDelete(id);
        if(!blog){
            return res.status(500).send({
                success:false,
                meaasge:"blog for delete  not found",
            });
        }
        return res.status(200).send({
            success:true,
            message:"successfully deleted",
        });

    }
catch (error) {
        console.log(error);
        return res.status(400).send({
          success: false,
          message: "error while deletring blog",
          error,
        });
    }
}
//get blog by id
export const getblogbyidcontroller=async(req,res)=>{
    try{
        const {id}=req.params;
        const blog= await blog_model.findById(id);
        if(!blog){
            return res.status(404).send({
                success:false,
                message:`blog not found with this id`
            });
        }
        return res.status(200).send({
            success:true,
            message:`fatch single blog`,
            blog,

        });
    }
catch (error) {
        console.log(error);
        return res.status(400).send({
          success: false,
          message: "blog not found",
          error,
        });
    }
}
export const userblogcontroler=async(req,res)=>{
    try{
        const userblog=await user_model.findById(req.params.id).populate("blogs");

        if(!userblog){
            return res.status(404).send({
                success:false,
                message:"blog is not found with this id",
            })

        }
        return res.status(200).send({
            success:true,
            message:"the bolg is found",
            userblog,
        })

    }
    catch(error){
        console.log(error);
        return res.status(404).send({
            success:false,
            message:"error in user blog",
            error,
        });

    }
}