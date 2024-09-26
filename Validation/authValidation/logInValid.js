
module.exports=async(req,res)=>{

      try{   

            const{email,password}=req.body;
            if(!email||!password){
                  return res.json({
                        success:false,
                        message:"Something is missing",
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


