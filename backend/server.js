import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


import authRoutes from "./src/routes/authRoutes.js";

import contentRoutes from "./src/routes/contentRoutes.js";
import publicContentRoutes from "./src/routes/publicContentRoutes.js";

import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import publicAuthRoutes from "./src/routes/publicAuthRoutes.js";



dotenv.config();



const app = express();

const PORT = process.env.PORT || 5000;



// ======================
// Middleware
// ======================

app.use(cors());

app.use(express.json());



// ======================
// MongoDB Connection
// ======================

mongoose

  .connect(process.env.MONGO_URI)

  .then(() => {

    console.log(
      "✅ Connected to MongoDB Atlas"
    );

  })

  .catch((error) => {

    console.log(
      "❌ MongoDB Error"
    );

    console.log(
      error.message
    );

  });




// ======================
// Health Check
// ======================

app.get("/", (req, res) => {

  res.send(
    "Backend running 🚀"
  );

});




app.use("/api/public/content",publicContentRoutes);

// ======================
// API Routes
// ======================

app.use(

  "/api/secure/admin-2026",

  authRoutes

);



app.use(

  "/api/secure/admin-2026/content",

  contentRoutes

);



app.use(

  "/api/secure/admin-2026/dashboard",

  dashboardRoutes

);

app.use(

  "/api/public",

  publicAuthRoutes

);




// ======================
// Server Start
// ======================

app.listen(PORT, () => {


  console.log(

    `🚀 Server running on port ${PORT}`

  );


});
