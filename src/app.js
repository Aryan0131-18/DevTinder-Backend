require("dotenv").config();
const express=require("express");
const connectDB =require("./Config/database");
const app=express();
const cookieParser=require("cookie-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");
const userRouter=require("./routes/user");
const cors= require("cors");


// Middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);
 

connectDB()
.then(()=>{
    console.log("Database Connection Established....");
    app.listen(7777,()=>{
    console.log("Server listen successfully on port 7777");
});
})
.catch(()=>{
    console.log("Database Cannot be established!!");
});








// const {adminAuth,userAuth}=require("./midllewares/auth");

// app.use("/admin",adminAuth);

// app.get("/admin/getalldata",(req,res)=>{
//     res.send("Data Collected Successfully!");
// })

// app.get("/user/data",userAuth,(req,res)=>{
//     res.send("User Data Send");
// })



// Route Handler

// app.use(
//     "/user",
//     [(req,res,next)=>{
//     console.log("Handling Route 1");
//     next();
// },
// (req,res,next)=>{
//     console.log("Handling Route 2");
//     // res.send("Response 2!");
//     next();
// },
// (req,res,next)=>{
//     // res.send("Response 3!");
//     next();
// }],
// (req,res,next)=>{
//     next();
// },
// (req,res)=>{
//     res.send("Response 4!");
// }
// )


// app.get("/user",(req,res)=>{
//     res.send({firstname: "Aryan", lastName: "Raj"});
// })

// app.post("/user",(req,res)=>{
//     res.send("Data stored successfully!");
// })

// app.delete("/user",(req,res)=>{
//     res.send("Deleted Successfully");
// })
// app.use("/test",(req,res)=>{
//     res.send("Test the server!");
// })

// app.use("/",(req,res)=>{
//     res.send("Namaste Aryan!");
// })
