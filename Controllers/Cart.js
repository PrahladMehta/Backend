
const addToCartService=require("../Services/cartServices/addToCart");
const removeFromCartServices=require("../Services/cartServices/removeFromCart")
const getAllCartServices=require("../Services/cartServices/getCart");
const deleteFromCartServices=require("../Services/cartServices/deleteFromCart");

exports.addToCart=async(req,res)=>{
      try{

 
            addToCartService(req,res);



      }catch(e){

            console.log("ERROR");
            console.log(e);

            return res.json({
                  success:false,
                  message:"Somthing went wrong"
            })

      }

}


exports.removeFromCart=async(req,res)=>{
      try{

            removeFromCartServices(req,res);


      }catch(e){


            console.log("Error");

            console.log(e);

            return res.json({
                  success:false,
                  message:"Somthing went wrong"
            })



      }
}

exports.getAllCart=async(req,res)=>{

      try{

            getAllCartServices(req,res);

            

      }catch(e){

            console.log("Error");

            console.log(e);

            return res.json({
                  success:false,
                  message:"Somthing went wrong"
            })


      }
}

exports.deleteFromCart=async(req,res)=>{


      try{

                  deleteFromCartServices(req,res);

      }catch(e){


            console.log("Error");

            console.log(e);

            return res.json({
                  success:false,
                  message:"Somthing went wrong"
            })



      }


}
