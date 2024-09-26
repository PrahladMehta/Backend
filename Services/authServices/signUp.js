const User=require('../../Model/User');
const jwt=require("jsonwebtoken");
async function signUp(req,res){

      try{
          

            const{firstname,lastname,email,password,otp,role}=req.body;

            // const check=await User.findOne({email});
        
            // if(check){
            //       return res.json({
            //             success:false,
            //             message:"user exist",
            //       })
            // }

           
           
            const response=await User.create({firstname,lastname,email,password,otp,role});

            // const user=await user.findOne({email});

            console.log(response);

            const token= jwt.sign({firstname,lastname,email,id:response._id},process.env.secret_key);
            
            console.log("SIng")
            return res.json({success:true,token,message:"User created"});

      }catch(e){
            console.log("ERROR");
            console.log(e);
            
      }

}

module.exports=signUp;