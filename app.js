
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/db");
//connect to databse before starting server
connectDB();
//Middleware-----------
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
//to access image uploads statically by public URL 
app.use("/uploads",express.static("uploads"));
//Routes----------
//customer routes
const customerRoutes = require("./routes/customerRoutes");
app.use("/api/customer",customerRoutes);
//user routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/user",userRoutes);
//CategoryRoutes
const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/category",categoryRoutes);
// dummy API testing
app.get("/",(req,res)=>{
    res.send("API is working Accurately");
});
//error handling---------------
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error:"Something Unexpected happened"});
});
//server entry point
const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


// Export for Render
module.exports = app;
