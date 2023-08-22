import express from "express";
import { getallusers, logincontroller, registercontroller } from "../controllers/usercontroller.js";
//router object
export const router=express.Router();
export default router;

//get all user
router.get("/all-users",getallusers);
//create user||post
router.post("/register",registercontroller);
//login
router.post("/login",logincontroller);