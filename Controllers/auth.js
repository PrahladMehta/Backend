// const User=require('../Model/User');
// const jwt=require("jsonwebtoken");
const signUp=require("../Services/authServices/signUp");
const signUpValid=require("../Validation/authValidation/signUpValid");
const logInValid=require("../Validation/authValidation/logInValid");
const logIn=require("../Services/authServices/logIn");
const User = require("../Model/User");
exports.signUp=async (req,res)=>{
      try{     
            
            signUpValid(req,res); // validating data
            signUp(req,res);  //DB operation
         
      }catch(e){
            res.json({
                  success:false,
                  message:'something went wrong',
                  error:e,

            })
            console.log("ERROR",e);
      }

}


exports.logIn=async (req,res)=>{

      try{
           
            logInValid(req,res);
            logIn(req,res);


      }catch(e){
            res.json({
                  success:false,
                  message:'something went wrong',
                  error:e,

            })
            console.log("ERROR",e);
      }

}

exports.verifyOtp=async (req,res)=>{

      try{

             const {email,otp}=req.body;

             const user=await User.findOne({email});

             if(!user){
                  await User.deleteOne({email});
                  return res.json({
                        success:false,
                        message:"User Not exist try again"
                  })
             }


             if(user.otp!==otp){

                  await User.deleteOne({email});
                  return res.json({
                        success:false,
                        message:"Wrong otp try again"
                  });

             }

             return res.json({
                  success:true,
                  message:"You are verifed",
             })

      }catch(e){

             await User.deleteOne({email});

             console.log("error");
             console.log(e);

            return res.json({
                  success:false,
                  message:"something went wrong"
            })
      }

}