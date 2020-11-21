//Importing all the dependencies for the API
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Setting a DB_CONNECT Environment variable that stores the mongodb connection string
dotenv.config();

//Connecting to the single-source of truth backend database
mongoose.connect(process.env.DB_CONNECT,{ useUnifiedTopology: true, useNewUrlParser: true },()=>{
    console.log("Connected to the backend MongoDB Atlas Cloud Server!")
});

//Creating the app with express middleware
const app = express();


//Importing all the routes to endpoints for the API
const authRoutes = require('./routes/authRoutes');

//Home-Page endpoint [to test if the API is working/live]
app.get("/api/v1",(req,res)=>{
    res.json({
        message:"API is working fine!"
    })
})

//Registering the middleware routes
app.use("/api/v1/auth",authRoutes);


//Actually running the API
app.listen(3000,()=>{
    console.log("online-community-api is up and running!");
})