const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true,unique:true},
        contact:{type:String,required:true},
        address:{type:String,required:true},
        gender:{type:String,required:true},
        userId:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
        
    },
    {timestamps: true}
);
    module.exports = mongoose.model("customer",customerSchema);