const Product = require("../../Model/Product");
const cloudinary=require("../../Utils/cloudinary");
const fs=require("fs");
module.exports=async(req,res)=>{
      try{
        
          const {title,description,price,quantity,id,category}= req.body;
          const {path}=req.file;
          if(!title||!description||!price||!quantity||!path||!id){

               if(path){
                  fs.unlinkSync(path);
               }
                return res.json({
                  success:false,
                  message:"Something is missing"
                });
          }
          const url=await cloudinary(path);
       
      if(!url){
            return res.json({
                  success:false,
                  message:"Error on img upload"
            })
      }
           await Product.create({title,description,price,quantity,category,image:url,seller:id});
           return  res.json({
            success:true,
            message:"Product added successfully"
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