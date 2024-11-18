
import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
},{timestamps:true});

export const cartModel = mongoose.model("carts", cartSchema);