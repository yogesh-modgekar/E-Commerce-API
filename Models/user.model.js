
import mongoose from "mongoose";

// Creating user schema
const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
},{timestamps:true});

export const userModel = mongoose.model("users", userSchema);