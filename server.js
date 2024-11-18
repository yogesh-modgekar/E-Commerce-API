
import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./Routes/user.routes.js";
import { productRoutes } from "./Routes/product.routes.js";
import { cartRoutes } from "./Routes/cart.routes.js";

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/E-commerce")
.then(()=>{
    console.log("Successfully connected to MongoDB..!");
})
.catch(()=>{
    console.log("Enable to Connect MongoDB, Please try Again..!");
});

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
  console.log(`${req.method} , http://localhost:6000${req.url}`);
  next();
})

userRoutes(app);
productRoutes(app);
cartRoutes(app);

// Creating the Server
app.listen(6000,()=>{
    console.log("Server is runing on port number 5000..!");
});
