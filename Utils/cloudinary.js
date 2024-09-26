
const cloudinary = require('cloudinary').v2;
require("dotenv").config();
const fs=require("fs");

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploader= async (filepath,res)=>{
    
   try{

       if(!filepath){
        return null;
       }
       const response=await cloudinary.uploader.upload(filepath,{resource_type:"auto"});

       fs.unlinkSync(filepath);

      //  console.log("url "+response.url);

      // console.log("RESPONSE");

      // console.log(response);

       return response.url;
   }catch(e){
    fs.unlinkSync(filepath);
    console.log("ERROR");
    console.log(e);
return res.json({success:false,
      message:"Somthing went wrong"}
    )
   }


}



module.exports=uploader;




