
import mongoose from "mongoose"

// Creating products schema
const productSchema = new mongoose.Schema({
     name:{
        type : String,
        required : true
     },
     price : {
        type : Number,
        required : true
     },
     description : String,
     stock : {
        type : String,
        required : true
     }
},{timestamps:true});

export const productModel = mongoose.model("products",productSchema);
