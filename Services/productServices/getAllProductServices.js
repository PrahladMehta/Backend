const Product = require("../../Model/Product")


module.exports=async(req,res)=>{

      try{   
          
            const productData=await Product.find();     
             res.json({
                  success:true,
                  allproduct:productData,
                  message:"Data fetch successfully"
             });

   
      }catch(e){

            console.log("ERROR");
            console.log(e); 
            return res.json({
                  success:false,
                  message:"Something went wrong"
            });


      }
}