const mongoose=require("mongoose");

const connectionRequestSchema=new mongoose.Schema({
    
   fromUserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
   },
   toUserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
   },
   status:{
    type:String,
    enum:{
        values:["ignored","interested","accepted","rejected"],
        message:`{VALUE} is incorrect status type`,
    }
   }
},{timestamps:true});


connectionRequestSchema.pre("save",function(){
    const connectionRequest=this;
    // check if the formUserId is same as toUserId
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("Cannot send Connection request to yourself!");
    }
    
})

const ConnectionRequestModel=new mongoose.model(
    "ConnectionRequest",
    connectionRequestSchema
);

module.exports=ConnectionRequestModel;