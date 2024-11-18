
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../Controllers/product.controller.js";

export function productRoutes(app){

    // End-point to create a new product
    app.post("/product", createProduct);
     
    // End-point to get the list of all products
    app.get("/products", getProduct);
     
    // End-pont to get a product based on MongoDB ObjectID
    app.get("/products/:id", getProductById);

    // End-point to update product based on MongoDB ObjectID
    app.put("/products/:id", updateProduct);

    // End-point to delete product based on MongoDB ObjectID
    app.delete("/products/:id", deleteProduct);
}