 const placeOrderService=require("../Services/orderServices/placeOrder");
 const getOrderService=require("../Services/orderServices/getOrder");
 const getAllOrderOfSellerService=require("../Services/orderServices/getAllOrderOfSeller");
 exports.placeOrder=async(req,res)=>{

      try{

            placeOrderService(req,res);




      }catch(e){

            console.log("ERROR");
            console.log(e);
      }
 }

 exports.getOrder=async(req,res)=>{

      try{

         getOrderService(req,res);


      }catch(e){

            console.log("ERROR");
            console.log(e);


      }
 }


 
 exports.getAllOrderOfSeller=async(req,res)=>{

      try{

       getAllOrderOfSellerService(req,res);


      }catch(e){

            console.log("ERROR");
            console.log(e);


      }
 }
