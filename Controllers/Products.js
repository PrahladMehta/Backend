
const getAllProductServices=require("../Services/productServices/getAllProductServices");
const removeProductServices=require("../Services/productServices/removeProductService");
const updateProductServices=require("../Services/productServices/updateProductService");
const addProductServices=require("../Services/productServices/addProductService"); 


exports.getAllProduct=(req,res)=>{
      try{
      
            getAllProductServices(req,res);
            
      }catch(e){
            console.log("Error")
            console.log(e);

            return res.json({
                  success:false,
                  message:"Something went wrong"
            })
      }


}


exports.addProduct=async(req,res)=>{

      try{


           addProductServices(req,res);

            
      }catch(e){
            console.log("Error")
            console.log(e);

            return res.json({
                  success:false,
                  message:"Something went wrong"
            })
      }

}


exports.removeProduct=async(req,res)=>{

      try{

           removeProductServices(req,res);
            
      }catch(e){
            console.log("Error")
            console.log(e);

            return res.json({
                  success:false,
                  message:"Something went wrong"
            })
      }

}

exports.updateProduct=async(req,res)=>{

      try{

           updateProductServices(req,res);

            
      }catch(e){
            console.log("Error")
            console.log(e);

            return res.json({
                  success:false,
                  message:"Something went wrong"
            })
      }

}