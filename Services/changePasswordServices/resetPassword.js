const User=require('../../Model/User');
const jwt=require("jsonwebtoken");
async function resetPassword(req,res){

      try{

            const {email,password}=req.body;     
            const{newpassword}=req.body;
           
            const user=await User.findOne({email});
            if(user.password!==password){
                  return res.json({
                        success:false,
                        message:"Password is incorrect"
                  })
            }
            user.password=newpassword;

         
            await user.save(); //save the user data in db
            return res.json({
                  success:true,
                  message:"Password Update succesfully"
            })
          

        

      }catch(e){
            res.json({
                  success:false,
                  message:'something went wrong',
                  error:e,

            })
            console.log("ERROR",e);
       
      }

}

module.exports=resetPassword;
