const User=require("../../Model/User");
const jwt=require("jsonwebtoken");
async function logIn(req,res){

      try{
          
            const{email,password,role}=req.body;


            const check=await User.findOne({$and:[{email},{role}]});
            if(!check){
                  return res.json({
                        success:false,
                        message:"user not exist",
                  })
            }

            if(check.password!==password){

                  return res.json({
                        success:false,  
                        message:"Password is incorrect",
                  })
            }
           const {firstname,lastname}=check;
            const token=jwt.sign({firstname,lastname,email,id:check._id},process.env.secret_key);
         
        return    res.json({
                  success:true,    
                   message:"Login",
                   token
            })


           
   

      }catch(e){
            console.log("ERROR");
            console.log(e);
            
      }

}

module.exports=logIn;