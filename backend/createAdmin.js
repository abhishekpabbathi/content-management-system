import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/User.js";


dotenv.config();


await mongoose.connect(process.env.MONGO_URI);


await User.create({

    username:"admin",
    password:"admin123"

});


console.log("Admin created");


process.exit();