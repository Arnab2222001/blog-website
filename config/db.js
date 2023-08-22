import mongoose from "mongoose";
 export const conectDb= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(
          `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
            .white
        );
      } catch (error) {
        console.log(`MONGO Connect Error ${error}`.bgRed.white);
      }
};
