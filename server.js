import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import { conectDb }from "../blog website/config/db.js";

//env config for security
dotenv.config();
//imporing all routes
import userRoutes from "./routes/user_routes.js";
import blogRoutes from "./routes/blog_route.js";
//rest object
const app=express();
//mongobd
conectDb();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
//routers
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/blog",blogRoutes);


//gets req for the server .js
app.get("/",(req,res)=>{

    res.status(200).send({
        "message":"node server",
    })
});

//port 
const PORT=process.env.PORT||8000
//listen
app.listen(8000,()=>{
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode port on ${PORT}`.bgCyan
          .white
      );
});
