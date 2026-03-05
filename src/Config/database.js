const mongoose=require("mongoose");

const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://eraryanraj18_db_user:EYY7smINjmelX1DY@evolving.9k3kcxz.mongodb.net/devTinder");
}

module.exports=connectDB;