const jwt=require("jsonwebtoken");
const env=require("dotenv");
exports.verifyJwt=async(req,res,next)=>{ 

      try{
         env.config();
         const token=req.headers["authorization"];

      //     console.log(token);
         
         const user=jwt.verify(JSON.parse(token),process.env.secret_key);


         req.body.user=user;
         req.body.id=user.id;
         next(); 

      }catch(e){

            console.log(e.message); 
            console.log("Error");
            res.json({
                  success:false,
                  messaeg:"Something went wrong"
            })

      }

}