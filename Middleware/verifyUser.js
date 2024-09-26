const User=require("../Model/User");
exports.verifyUser=async (req,res,next)=>{
      try{

            const {email}=req.body;

            const user=await User.findOne({email});

            if(!user){
                  return res.json({
                        success:false,
                        message:"User not exist",
                  });
            }

            req.body.user=user;
         
            next();

      }catch(e){
            console.log(e);
            console.log("ERROR");
      }
}