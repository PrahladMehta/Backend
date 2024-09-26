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
exports.setMailOnStatusChange=async (req,res)=>{

      try{

            console.log("EMAIL SEND ON STATUS CHANGE");

            const {status,email}=req.body;      

              if(!email||!status){
                return res.json({
                      success:false,
                      message:"Something went wrong"
                })
              }
            





              const info = await transporter.sendMail({
                from: '<pankajmehta56876@gmail.email>',
                to: `${email}`, 
                subject: "Status Change", 
                text: "E-commerce Site", 
                html: `<h2>YOUR STATUS OF DELIVERY CHANGE TO ${status}</h2>`, 
              }); 
              

              console.log("EMAIL END ");
       
            res.json({
                  success:true,
                  message:"STATUS CHANGE AND MESSAGE SEND",
            })
              









      }catch(e){

            console.log("ERROR");
            console.log(e);
      }


}