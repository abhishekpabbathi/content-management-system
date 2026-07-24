import mongoose from "mongoose";
import Content from "./src/models/Content.js";
import dotenv from "dotenv";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const data = await Content.find();

console.log(data);

process.exit();
