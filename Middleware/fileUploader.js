const multer=require("multer");



const storage=multer.diskStorage({
      destination:function(req,file,cb){
           
            cb(null,'./public/images');
      },
      filename:function(req,file,cb){
            suffix="product img"+Date.now()+".jpg";

            cb(null,suffix);
        
      }
})

exports.upload=multer({storage});



