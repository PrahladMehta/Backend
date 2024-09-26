
const Product=require("../../Model/Product")
const User=require("../../Model/User")
module.exports= async (req,res)=>{

      try{

            const {id,productid}=req.body;

         
            const user=await User.findOne({_id:id});
            const product=await Product.findOne({_id:productid});

            if(!user||!product){
                  return res.json({
                        success:false,
                        message:"Something is misssing "
                  })
            }

            let index=user.cart.findIndex((item)=> item.productid.toString()===productid.toString());

            if(index===-1){
                  user.cart.push({productid,count:1});
                        
            }else{
                  let count=user.cart[index].count
                  user.cart[index].count=parseInt(count)+1;
            }

            console.log(user.cart);
       
         
          await user.save();

          return res.json({
            success:true,
            message:"Item added"
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