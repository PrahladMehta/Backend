 
const mongoose=require("mongoose");
const Order= mongoose.Schema({

   product_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
   },
   order_by:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
    },
    seller_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    price:{
      type:String,
      required:true
    },
    count:{
      type:String,
      required:true
    },
    status:{
      type:String,
      required:true
    },
    summery:{
      type:String, 
    },
    total:{
      type:Number,
      required:true,
    }

},{timestamps:true})

module.exports=mongoose.model("Order",Order);

