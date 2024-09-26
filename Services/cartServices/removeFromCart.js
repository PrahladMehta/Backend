
const User=require("../../Model/User")
module.exports= async (req,res)=>{

      try{

            const {id,productid,email}=req.body;

            console.log(productid);

            const user=await User.findOne({_id:id});

            if(!user){
                  return res.json({
                        success:false,
                        message:"something is missing"
                  })
            }
         
            let index=user.cart.findIndex((item)=>item.productid.toString()===productid.toString());

            if(index===-1){
                  return res.json({
                        success:false,
                        message:"Product not exist "
                  })
            }
    
           if(user.cart[index].count===1){
            user.cart.splice(index,1);
           }else{
              user.cart[index].count=parseInt(user.cart[index].count)-1
      }

          await user.save(); 

          return res.json({
            success:true,
            message:"Item remove"
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