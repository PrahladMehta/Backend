
const Product=require("../../Model/Product")
const User=require("../../Model/User")

module.exports= async (req,res)=>{

      try{
            const {id}=req.body;
         
            const user=await User.findOne({_id:id});

            if(!user){
                  return res.json({
                        success:false,
                        message:"Something is misssing "
                  })
            }

            const cart=user.cart;
            
            const allCartItem=[];

            for(let i=0;i<cart.length;i++){

                  const productid=cart[i].productid;
                  const count=cart[i].count;

                  const product=await Product.findOne({_id:productid});

                  if(product){

                        product.quantity=count;

                        allCartItem.push(product);

                  }
            }

            // console.log(allCartItem);

          return res.json({
            success:true,
            message:"All cart data fetched",
            cart:allCartItem
          })

      }catch(e){
            console.log("ERROR");
            console.log(e);

            return res.json({
                  success:false,
                  message:"Something went wrong"
            })
      }

}