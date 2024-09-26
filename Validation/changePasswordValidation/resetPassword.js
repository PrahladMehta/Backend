
module.exports=async(req,res)=>{

      try{   
               
            const {email,password,newpassword}=req.body;
            if(!email||!password||!newpassword){
               return  res.json({
                        success:false,
                        message:"enter password,confirm password,email"
                  });          
            }

      }catch(e){
       
            res.json({
                  success:false,
                  message:'something went wrong',
                  error:e,

            })
            console.log("ERROR",e);

      }

}


