
const nodemailer = require("nodemailer");
const User=require("../Model/User") 
const env=require("dotenv");
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "pankajmehta56876@gmail.com",
    pass: "rdafrslkavsvbmof",
  },
});

 
exports.sentOtp=async(req,res,next) =>{

      try{

           env.config();

        
              const {email}=req.body;

            

                const user=await User.findOne({email});

                if(user){
                  return res.json({
                        success:false,
                        message:"user exist"
                  })
                }
              
                const otp=parseInt(Math.random()*1000000);
            
                req.body.otp=otp;




                const info = await transporter.sendMail({
                  from: '<pankajmehta56876@gmail.email>',
                  to: `${email}`, 
                  subject: "Hello ✔", 
                  text: "Hello world?", 
                  html: `<b>OTP  : ${otp}</b>`, 
                }); 
                
         
                next();
                

      }catch(e){

            console.log("ERROR");
            console.log(e);

            return res.json({
                  success:false,
                  message:"Something went wrong"
            })

      }


}


