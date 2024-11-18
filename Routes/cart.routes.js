
import { createCart, getCart, getCartById, updateCart,deleteCart } from "../Controllers/cart.controller.js";
import { verifyToken } from "../Middleware/auth.js";

export function cartRoutes(app){

    // End-point to add cart
    app.post("/cart",verifyToken, createCart);

    // End-point to get cart details by providing token
    app.get("/cart", verifyToken, getCart);

    // End-point to get cart details by Id and by providing token
    app.get("/cart/:id", verifyToken, getCartById);

    // End-point to update cart details by Id and by providing token
    app.put("/cart/:id",verifyToken, updateCart);

     // End-point to delete cart details by Id and by providing token
    app.delete("/cart/:id", verifyToken, deleteCart);
};