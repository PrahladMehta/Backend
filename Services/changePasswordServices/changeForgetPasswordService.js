const User=require("../../Model/User");

module.exports=async(req,res)=>{
      try{
           
            const {password,user}=req.body;  
          
           console.log(password+" "+user);
            await User.updateOne({email:user.email},{$set:{password:password}});
            return res.json({
                 success:true,
                 message:"password change succesfully" 
           });
      }catch(e){

            res.json({
                  success:false,
                  message:'something went wrong',
                  error:e,

            })
            console.log("ERROR",e);

      }
}