
const updateStatusService=require("../Services/updateStatusServices/updateStatusServices");
exports.updateStatus=async(req,res,next)=>{


      try{

            updateStatusService(req,res,next);


      }catch(e){
            
            console.log("ERROR");
            console.log(e);


      }
}