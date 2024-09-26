const Router=require("express").Router();
const {forgetPassword,resetPassword,changeForgetPassword}=require("../Controllers/changePassword")
const {verifyUser}=require("../Middleware/verifyUser");
const{sentMail}=require("../Middleware/sentMail");
const {verifyParam}=require("../Middleware/verfifyParam");
Router.post("/resetpassword",verifyUser,resetPassword);
Router.post("/forgetpassword",verifyUser,sentMail,forgetPassword);
Router.post("/changeforgetpassword/:param",verifyParam,changeForgetPassword);


module.exports=Router;


