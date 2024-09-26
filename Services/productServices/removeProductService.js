

const Product = require("../../Model/Product");

module.exports=async(req,res)=>{
      try{

          const {productId}= req.body;

          console.log(req.body);

          if(!productId){

                return res.json({

                  success:false,
                  message:"Something is missing"
                });
          }
       
           await Product.findOneAndDelete({_id:productId});



           return  res.json({ 
            success:true,
            message:"Product remove successfully"
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