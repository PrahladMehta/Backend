
const Router=require("express").Router();

const { placeOrder, getOrder, getAllOrderOfSeller } = require("../Controllers/Order");
const {addProduct,getAllProduct,removeProduct, updateProduct}=require("../Controllers/Products");
const {upload}=require("../Middleware/fileUploader");
const {verifyJwt}=require("../Middleware/verifyJwt")
const {sentMailOrderPlaced}=require("../Middleware/sentMailOrderPlaced");
const {Payment}=require("../Middleware/Payment"); 


Router.post("/addproduct",upload.single('image'),verifyJwt,addProduct);
Router.get("/getallproduct",getAllProduct);
Router.post("/removeproduct",verifyJwt,removeProduct); 
Router.post('/updateproduct',upload.single('image'),verifyJwt,updateProduct);   

Router.post('/placeorder',verifyJwt,Payment,placeOrder);
Router.get('/getorder',verifyJwt,getOrder);
Router.get('/sentordermail',verifyJwt,sentMailOrderPlaced);
Router.get('/getallorderofseller',verifyJwt,getAllOrderOfSeller);



module.exports=Router;

 
