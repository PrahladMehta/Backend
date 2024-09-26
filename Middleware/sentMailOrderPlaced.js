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

  
exports.sentMailOrderPlaced=async(req,res) =>{

      try{

           env.config();

              const {id}=req.body;

              const user=await User.findById(id);

              const email=user.email;

      
               

                const info = await transporter.sendMail({
                  from: '<pankajmehta56876@gmail.email>',
                  to: `${email}`, 
                  subject: "ORDER CONFERMATION", 
                  text: "Hello world?", 
                  html: `<h2>$ YOUR ORDER HAS BEEN PLACED THIS IS CONFORMATION MAIL </h2>`, 
                }); 
           
             return res.json({

                  success:true,
                  message:"Mail Sent"
                  

             });
                

      }catch(e){

            console.log("ERROR");
            console.log(e);

            return res.json({
                  success:false,
                  message:"Something went wrong"
            })

      }


}


