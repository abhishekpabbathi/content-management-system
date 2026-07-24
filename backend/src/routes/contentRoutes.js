import express from "express";

import Content from "../models/Content.js";


const router = express.Router();



// ======================
// Get All Content
// ======================

router.get("/", async(req,res)=>{


  try{


    const contents = await Content.find()

      .sort({

        createdAt:-1

      });



    res.json(contents);



  }catch(error){


    res.status(500).json({

      message:error.message

    });


  }


});






// ======================
// Create Content
// ======================

router.post("/", async(req,res)=>{


  try{


    const {

      title,

      description,

      category,

      body,

      blocks

    } = req.body;




    if(!title || !description || !body){


      return res.status(400).json({

        message:"Title, description and body required"

      });


    }




    const content = new Content({

      title,

      description,

      body,

      category:category || "Articles",

      status:"Draft",

      author:"Admin"

    });



    await content.save();




    res.status(201).json(content);



  }catch(error){


    console.log(
      error.message
    );


    res.status(500).json({

      message:error.message

    });


  }


});







// ======================
// Publish Content
// ======================

router.put("/:id/publish", async(req,res)=>{


  try{


    const content = await Content.findByIdAndUpdate(

      req.params.id,

      {

        status:"Published"

      },

      {

        new:true

      }

    );



    res.json(content);



  }catch(error){


    res.status(500).json({

      message:error.message

    });


  }


});







// ======================
// Delete Content
// ======================

router.delete("/:id", async(req,res)=>{


  try{


    await Content.findByIdAndDelete(

      req.params.id

    );


    res.json({

      message:"Content deleted"

    });



  }catch(error){


    res.status(500).json({

      message:error.message

    });


  }


});





export default router;
