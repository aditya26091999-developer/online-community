const mongoose = require('mongoose');
const router = require('express').Router();

router.post("/login",(req,res)=>{
    res.json({
        message:"Login Endpoint!"
    })
})

router.post("/register",(req,res)=>{
    res.json({
        message:"Register Endpoint!"
    })
})

router.post("/forgot",(req,res)=>{
    res.json({
        message:"Forgot Endpoint!"
    })
})

router.post("/logout",(req,res)=>{
    res.json({
        message:"LogOut Endpoint!"
    })
})

module.exports = router;