import express from "express";
import Content from "../models/Content.js";

const router=express.Router();

router.get("/",async(req,res)=>{
try{
const contents=await Content.find({status:"Published"}).sort({createdAt:-1});
res.json(contents);
}catch(error){
res.status(500).json({message:error.message});
}
});

export default router;
