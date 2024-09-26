const Order = require("../../Model/Order");
const Product = require("../../Model/Product");
const User = require("../../Model/User");


module.exports=async(req,res)=>{

      try{
            const {address,productId,sellerId,clientSecret,id}=req.body;
            if(!address||!id||!clientSecret){
                  return res.json({
                        success:false,
                        message:"Something is missing"
                  });
            }   
            const user=await User.findById(id);

            const cart=user.cart;

    
            for(let i=0;i<cart.length;i++){
                   const item=cart[i];      
                   const product=await Product.findById(item.productid);
                   if(!product){          
                        continue;
                   } 
                   const price=product.price;
                   const count=item.count;
                   const seller_id=product.seller;
                   const total=parseInt(price)*parseInt(count);
                   const order=await Order.create({order_by:user._id,product_id:item.productid,seller_id,count,status:"processing",total,address,price});

                   user.orders.push(order._id);
                                
            }

            user.cart=[];
            await user.save();

      

         return res.json({
            success:true,
            message:"Order placed",
            clientSecret
         })



      }catch(e){

            console.error(e);
            return res.json({
              success: false,
              message: "An error occurred while placing the order",
            });

      }
}