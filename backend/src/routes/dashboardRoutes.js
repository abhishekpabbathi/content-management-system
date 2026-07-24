import express from "express";

import Content from "../models/Content.js";

import User from "../models/User.js";



const router = express.Router();



// ======================
// Dashboard Statistics
// ======================

router.get("/stats", async (req, res) => {


  try {


    const totalContent =
      await Content.countDocuments();



    const publishedContent =
      await Content.countDocuments({

        status: "Published"

      });



    const draftContent =
      await Content.countDocuments({

        status: "Draft"

      });



    const totalUsers =
      await User.countDocuments();




    const recentActivity =
      await Content.find()

        .sort({

          createdAt: -1

        })

        .limit(5)

        .select(
          "title status createdAt"
        );




    res.json({


      statistics: {


        totalContent,

        publishedContent,

        draftContent,

        totalUsers


      },


      recentActivity


    });



  } catch(error) {


    res.status(500).json({

      message:error.message

    });


  }


});



export default router;
