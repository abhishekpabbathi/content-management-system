import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const login = async(req,res)=>{

    try{

        const {username,password}=req.body;


        const user = await User.findOne({
            username
        });


        if(!user){

            return res.status(401).json({
                message:"Invalid credentials"
            });

        }


        let validPassword = false;


        // Check bcrypt password
        if(user.password.startsWith("$2b$")){

            validPassword = await bcrypt.compare(
                password,
                user.password
            );

        }
        else{

            // Support old plain password
            validPassword = user.password === password;

        }


        if(!validPassword){

            return res.status(401).json({
                message:"Invalid credentials"
            });

        }


        const token = jwt.sign(
            {
                username:user.username,
                role:"admin"
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );


        res.json({

            message:"Login successful",

            token,

            user:{
                username:user.username
            }

        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
