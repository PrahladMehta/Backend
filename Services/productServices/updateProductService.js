
const Product = require("../../Model/Product");
const cloudinary=require("../../Utils/cloudinary");

module.exports=async(req,res)=>{
      try{
          const {title,description,price,quantity,seller,category,productId}= req.body;

       
          if(!productId){
                return res.json({
                  success:false,
                  message:"Something is missing"
                });
          }

         
          const product= await Product.findOne({_id:productId});
          if(!product){
             return res.json({
 
                   success:false,
                   message:"Product don't exixts"
                 });
          }
          if(title){
             product.title=title
          }
          if(category){
            product.category=category;
          }
          if(description){
            product.description=description;
          }

          if(req.file){

            const {path}=req.file;
            let image;
            image=await cloudinary(path);
            product.image=image;
          }

          if(price){
            product.price=price;
          }
          if(quantity){
            product.quantity=quantity;
          }
          await product.save();
       
           return  res.json({
            success:true,
            message:"Product added successfully"
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