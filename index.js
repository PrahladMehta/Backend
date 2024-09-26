const express=require("express");
const cors=require("cors");
const app=express();
const dbconnect=require("./Dbconnect/dbconnect");
const  authRouter=require("./Routes/authRoutes"); 
const  changepasswordRouter=require("./Routes/changePassword");
const cartRouters=require("./Routes/cartRoutes")
const productRouters=require("./Routes/Products");
const statusUpdateRoute=require("./Routes/statusChange");

const bodyParser=require("body-parser");
require("dotenv").config();

app.use(express.json()); 
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

 
app.use(cors({   
      origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
   
app.listen(process.env.PORT,()=>{ 
      console.log("Listen in port ",process.env.PORT);
})

dbconnect();

const prefix="/api/v1";



// =====================================ROUTES===========================================

app.use(prefix,authRouter);
app.use(prefix,changepasswordRouter);
app.use(prefix,cartRouters);
app.use(prefix,productRouters);
app.use(prefix,statusUpdateRoute);

