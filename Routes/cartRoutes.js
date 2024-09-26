
const Router=require("express").Router();
const {addToCart,removeFromCart,getAllCart, deleteFromCart}=require("../Controllers/Cart");

const {verifyJwt}=require("../Middleware/verifyJwt");
Router.post("/addtocart",verifyJwt,addToCart);
Router.post("/removefromcart",verifyJwt,removeFromCart);
Router.get("/getallcart",verifyJwt,getAllCart);
Router.post("/deletefromcart",verifyJwt,deleteFromCart);
 

module.exports=Router;

