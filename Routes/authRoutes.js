const express=require("express");
const{ sentOtp}=require("../Middleware/sentOtp");
const Router=express.Router();
const {signUp,logIn,verifyOtp}=require("../Controllers/auth");
// const { verifyUser } = require("../Middleware/verifyUser");

Router.post("/signup",sentOtp,signUp);
Router.post("/login",logIn);
Router.post("/otp",verifyOtp);

module.exports=Router;