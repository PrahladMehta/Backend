const Router=require("express").Router();
const {updateStatus}=require("../Controllers/updateStatus");
const {setMailOnStatusChange}=require("../Middleware/sentMailOnStatusChange");

Router.post('/changestatus',updateStatus,setMailOnStatusChange);

module.exports=Router;



