const Stripe=require("stripe");
require('dotenv').config();


const stripe=Stripe(process.env.PAYMENT_SECRET);

exports.Payment=async (req,res,next)=>{
      try{

            const {amount}=req.body;
            const paymentIntent=await stripe.paymentIntents.create({
                        amount:parseInt(amount)*100,
                        currency:'inr',
                        payment_method_types:['card']

            });

           const clientSecret=paymentIntent.client_secret;

           if(!clientSecret){
               return res.json({
                  success:false,
                  message:"Something went wrong"
               })
           }

           req.body.clientSecret=clientSecret;

           next();
      }catch(e){

            console.log("ERROR");
            console.log(e);

            res.json({
                  success:false,
                  message:"something went wrong"
            })

      }
};