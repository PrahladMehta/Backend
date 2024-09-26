const Order = require("../../Model/Order");
const User = require("../../Model/User");

const Product=require("../../Model/Product");
module.exports=async(req,res)=>{

      try{ 

            const {id}=req.body;

            if(!id){



                  return res.json({
                        success:false,
                        message:"User not exist",
                  })
            }

            const orders= await Order.find({seller_id:id});

        
            
            const response=[];
            let i=1;
            // console.log(orders);
            for(let order of orders){
 
     

                   const address=order.address;
                   console.log(order.order_by);
                   const user=await User.findById(order.order_by);
                   const product=await Product.findById(order.product_id);

                   if(!product){
                        continue;
                   }

                   const image=product.image
                   const quantity=order.count;
                   const title=product.title
      
      

                   const customer=user.firstname+"  "+user.lastname
                   const total=order.total;
                   const date=order.createdAt

                   response.push({id:i,order_id:order._id,address,user,customer,total,date,status:order.status,image,quantity,title});
                   i++;

            }

            return res.json({
                  success:true,
                  orders:response,
                  message:"Order fetch successfully"
            });

            


      }catch(e){

            console.log("ERROR");
            console.log(e);

            res.json({
                  success:false,
                  message:"Something went wrong"
            });


      }
}