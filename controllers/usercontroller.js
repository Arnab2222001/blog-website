import {user_model} from "../models/user_model.js";
import bcrypt from "bcrypt";
//det all user function
export const registercontroller =async(req,res)=>{
    try{
        const {username,email,password}=req.body
        //validation
        if(!username||!email||!password){
            return res.status(400).send({
                success:false,
                message:'please fill all fields'
            })
        }
        const exisitinguser=await user_model.findOne({email});
        if(exisitinguser){
            return res.status(401).send({
                success:true,
                message:'user alresdy exisits',
            });
        }
        //hashing the password
        const hashpassword=await bcrypt.hash(password,10);
      
        //save new user
        const user=new user_model({username,email,password:hashpassword});
        await user.save();
        return res.status(201).send({
            success:true,
            message:'new user created',
            user,
        });
    }
    
    catch(error){
       console.log(error);
        return res.status(500).send({message:`error in register`,
    success:false,
error})
    }
};
//register function
export const getallusers = async(req,res)=>{
 try{
    const users=await user_model.find({});
    return res.status(200).send({
        usercount:users.length,
        success:true,
        message:`all users data`,
        users,
    });
 }
 catch(error)
 {
    console.log(error);
    return res.status(500).send({
        success:false,
        message:`erroe in get all user`,
    });
 }
};
//login function
export const logincontroller=async(req,res)=>{
    try{
        const {email,password}=req.body
        //validation
        if(!email || !password){
        return res.status(401).send({
            success:false,
            message:`please provide email or password`,
        });
        }
        const user =await user_model.findOne({email});
        if(!user){
            return res.status(200).send({
                success:true,
                message:`email is not registerd`,
            });
        }
        //password
        const ismathch= await bcrypt.compare(password, user.password);
        if(!ismathch){
            return res.status(401).send({
                success:false,
                message:`invalid username or password`,
            });
        }
        return res.status(200).send({ 
            success:true,
            message:`log in successful`,
            user
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:`error login callback`,
            error
        })
    };

};
