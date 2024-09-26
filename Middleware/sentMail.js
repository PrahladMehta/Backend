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

  
exports.sentMail=async(req,res,next) =>{

      try{

           env.config();

              const {email}=req.body;

               const token= parseInt(Math.random()*100000000);
            
                await User.updateOne({email},{$set:{token:token}});
               

                const info = await transporter.sendMail({
                  from: '<pankajmehta56876@gmail.email>',
                  to: `${email}`, 
                  subject: "Hello ✔", 
                  text: "Hello world?", 
                  html: `<b>${process.env.client}updateforgetpassword/${token}</b>`, 
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


