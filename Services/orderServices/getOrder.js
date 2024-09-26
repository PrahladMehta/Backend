const Order = require("../../Model/Order");
const Product = require("../../Model/Product");
const User = require("../../Model/User");


module.exports=async(req,res)=>{

      try{

            const {id}=req.body;
            const user=await User.findById(id);
            const orders=user.orders;
            const reporders=[];

            for(let i=0;i<orders.length;i++){ 
                  const order=await Order.findById(orders[i]);
                  const productid=order.product_id;
                  const product=await Product.findById(productid);
                  const total=order.total;
                  const address=order.address;
                  const price=product.price;
                  const status=order.status;
                  const quantity=order.count;
                  const title=product.title
                  const image=product.image
                  reporders.push({total,address,price,status,quantity,title,image});
            }

           return res.json({

                  success:true,
                  message:"Order retrive",
                  orders:reporders
            })


      }catch(e){

            console.log("ERROR");
            console.log(e);
}

}