const User=require("../Model/User");

exports.verifyParam=async(req,res,next)=>{
      try{
            const {param}=req.params;
            console.log(param)

            if(!param){
                  return res.json({
                        success:false,
                        message:"Something went wrong"
                  })
            }
            const user=await User.findOne({token:param});
             if(!user){
                  return res.json({
                        success:false,
                        message:"Something went wrong"
                  })
             }
             req.body.user=user;      
             next();

      }catch(e){
            console.log("error");
            console.log(e);
      }
}