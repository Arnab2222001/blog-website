import express from "express";
import { getblogbyidcontroller,updateblogcontroller,createblogcontroller,deletecontroller,getallblogescontroller, userblogcontroler } from "../controllers/blogcontroller.js";
export const router=express.Router();
export default router;
//router
//get all-blogs route
router.get("/all-blog",getallblogescontroller);
router.get("/get-blog/:id",getblogbyidcontroller);
//post create blog
router.post("/create-blog",createblogcontroller);
//put ||update blog 
router.put("/update-blog/:id",updateblogcontroller);
//delete|| clear blogs
router.delete("/delete-blog/:id",deletecontroller);
//using id single blog
router.get("/user-blog/:id",userblogcontroler)
