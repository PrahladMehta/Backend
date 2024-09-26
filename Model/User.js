const mongoose=require("mongoose");
const User=mongoose.Schema({ 
      firstname:{
            type:String,
            required:true,
            trim:true
      },
      lastname:{
            type:String,
            required:true,
            trim:true
      },
      email:{
            type:String,
            required:true,
            trim:true
      },
      password:{
            type:String,
            required:true,
      },
      otp:{ 
            type:String,
            
      },
      cart:{
            type:[{count:{type:Number, min:0},productid:{type:mongoose.Schema.Types.ObjectId,ref:'Product'}}]
            
      },
      orders:{
            type:[mongoose.Schema.Types.ObjectId]
      },role:{
            type:String,
            enum:['buyer','seller','admin'],
            required:true
      },image:{
            type:String,

      },address:{
            type:String
      }
      
},{
      timestamps:true
})


module.exports=mongoose.model("User",User);