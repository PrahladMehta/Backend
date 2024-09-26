const mongoose=require('mongoose');

const Product=mongoose.Schema({
      title:{
            type:String,
            required:true,
            trim:true 
      },
      image:{
            type:String,
            required:true,
            trim:true
      },
      description:{
            type:String,
            required:true,
            trim:true
      },
      price:{
            type:String,
            required:true,
            min:0
      },rating:{
            type:String, 
            // required:true,
            min:0,
            max:5
      },seller:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            // required:true
      },
      quantity:{
            type:Number,
            min:0
      },
      category:{
            type:String,
            trim:true,
            // required:true
      },
      productsales:{
            type:String,
            min:0
      },
      view:{
            type:Number,
            min:0
      }

},{timestamps:true});


module.exports=mongoose.model('Product',Product);