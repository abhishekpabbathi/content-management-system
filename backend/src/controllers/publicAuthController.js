import jwt from "jsonwebtoken";
import PublicUser from "../models/PublicUser.js";

export const register=async(req,res)=>{

try{

const{name,email,password}=req.body;

if(!name||!email||!password){

return res.status(400).json({
message:"All fields are required"
});

}

const exists=await PublicUser.findOne({
email:email.toLowerCase()
});

if(exists){

return res.status(400).json({
message:"Email already exists"
});

}

const user=await PublicUser.create({

name,

email:email.toLowerCase(),

password

});

const token=jwt.sign(

{
id:user._id,
email:user.email,
role:"public"
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.status(201).json({

message:"Registration successful",

token,

user:{
id:user._id,
name:user.name,
email:user.email
}

});

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

export const login=async(req,res)=>{

try{

const{email,password}=req.body;

const user=await PublicUser.findOne({
email:email.toLowerCase()
});

if(!user){

return res.status(401).json({
message:"Invalid email or password"
});

}

const valid=await user.comparePassword(password);

if(!valid){

return res.status(401).json({
message:"Invalid email or password"
});

}

const token=jwt.sign(

{
id:user._id,
email:user.email,
role:"public"
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.json({

message:"Login successful",

token,

user:{
id:user._id,
name:user.name,
email:user.email
}

});

}
catch(error){

res.status(500).json({
message:error.message
});

}

};
