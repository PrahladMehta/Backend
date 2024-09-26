const mongoose=require("mongoose");

const dbconnect=()=>{

      try{
            mongoose.connect(process.env.url);
            console.log("db connected");
      }catch(e){

            console.log("Error on dbconnect",e); 
      }   


}

module.exports=dbconnect;