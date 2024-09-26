const User=require("../Model/User");
const resetPasswordValid=require("../Validation/changePasswordValidation/resetPassword");
const resetPasswordService=require("../Services/changePasswordServices/resetPassword");
const changeForgetPasswordValid=require("../Validation/changePasswordValidation/changeForgetPasswrod");
const changeForgetPasswordService=require("../Services/changePasswordServices/changeForgetPasswordService");

exports.resetPassword=async (req,res)=>{
      try{

                   resetPasswordValid(req,res)
                  resetPasswordService(req,res); 
             

      }catch(e){
            console.log("ERROR");
            console.log(e);
            res.json({
                  success:false,
                  message:"Something went wrong"
            })
      }  

}

exports.forgetPassword=async (req,res)=>{
      try{
            console.log("in controller");
            return res.json({
                  success:true,
                  message:"Check you mail",
            });        
 
      }catch(e){
            console.log("ERROR");
            console.log(e);
            res.json({
                  success:false,
                  message:"Something went wrong"
            })

      }

}

exports.changeForgetPassword=async (req,res)=>{

      try{

            changeForgetPasswordValid(req,res);
            changeForgetPasswordService(req,res);
           

      }catch(e){
            console.log("ERROR");
            console.log(e);
            res.json({
                  success:false,
                  message:"Something went wrong"
            })
      }

}