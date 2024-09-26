
module.exports=async(req,res)=>{

      try{   
            // console.log(req.body);
            const{firstname,lastname,email,password,otp,role}=req.body;
            if(!firstname||!lastname||!email||!password||!otp||!role){
                  return res.json({
                        success:false,
                        message:"Something is missing",
                  });
            }

            

            // console.log("hello");

      }catch(e){
       
            res.json({
                  success:false,
                  message:'something went wrong',
                  error:e,

            })
            console.log("ERROR",e);


      }

}


