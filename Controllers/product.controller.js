
import { productModel } from "../Models/product.model.js";

// implementation to POST a product
export async function createProduct(req,res){
    const product = req.body;
    try{
      const newProduct = await productModel.create(product);
      res.status(201).json({newProduct})
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message})
    }
};

// implementation to GET list of all products
export async function getProduct(req,res){
    try{
       const products = await productModel.find();
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message})
    }
};

// implementation to GET a product by MongoDB ObjectID
export async function getProductById(req,res){
    const productId = req.params.id;
    try{
        const product = await productModel.findOne({_id : productId});
        if(!product){
            return res.status(404).json({Message: "User not found"});
        }
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message})
    }
};

// implementation to UPDATE a product by MongoDB ObjectID
export async function updateProduct(req,res){
    const productId = req.params.id;
    const product = req.body;
    try{
        const updatedProduct = await productModel.updateOne({_id: productId}, product);
        if(!updatedProduct){
            return res.status(404).json({Message:"User not found"});
        }
        res.status(202).json(updatedProduct)
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message})
    }
};

// implementation to DELETE a product by MongoDB ObjectID
export async function deleteProduct(req,res){
    const productId = req.params.id;
    try{
        const deletedProduct = await productModel.deleteOne({_id:productId});
        if(!deletedProduct){
            return res.status(404).json({Message:"User not found"});
        }
        res.status(200).json(deletedProduct)
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message})
    }
};
