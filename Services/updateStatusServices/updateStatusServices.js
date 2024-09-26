
const Order=require("../../Model/Order");
const User = require("../../Model/User");
module.exports=async (req,res,next)=>{

      try{

            console.log("UPDATE STATUS START")

            const {status,order_id,id}=req.body;
            const order=await Order.findById(order_id);
            order.status=status.toLowerCase();
            await order.save();
            const user=await User.findById(order.order_by);
           
            req.body.email=user.email;
            console.log("UPDATE STATUS END");
            next(); 


      }catch(e){

            console.log("ERROR")
            console.log(e);
            return res.json({
                  success:false,
                  message:"Something went wrong"
            })


      }
}