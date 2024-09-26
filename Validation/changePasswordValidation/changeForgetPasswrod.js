

module.exports=(req,res)=>{

      try{

        
            const {password,user}=req.body; 
            
      //      console.log("valid "+user+"newpass"+password);
            if(!password||!user){
                 return res.json({
                       success:false,
                       message:"password is empty"
                 });
            }

      }catch(e){

            console.log("ERROR");
            console.log(e);
            res.json({
                  success:false,
                  message:"Something went wrong"
            })

      }

}