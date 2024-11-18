
import { cartModel } from "../Models/cart.model.js";


// implementation to create a cart
export async function createCart(req,res){
   const cart = req.body;
   try{
       const newCart = await cartModel.create(cart);
       res.status(201).json(newCart);
   }
   catch(err){
    res.status(500).json({Message:"Server Error", Error:err.message});
   }
};

// implementation to get the details of cart
export async function getCart(req,res){
    try{
        const carts = await cartModel.find();
        res.status(200).json(carts);
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message});
       }
};

// implementation to get the details of cart by ID
export async function getCartById(req,res){
    const cartId = req.params.id;
    try{
      const cart = await cartModel.findOne({_id:cartId});
      if(!cart){
        return res.status(404).json({Message:"Cart not found"});
      }
      res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message});
       }
} ;

// implementation to edit the details of cart by ID
export async function updateCart(req,res){
    const cartId = req.params.id;
    const cart = req.body;
    try{
         const updatedCart = await cartModel.updateOne({_id:cartId},cart);
         if(!updatedCart){
          return  res.status(404).json({Message:"Cart not found"});
         }
         res.status(202).json(updatedCart)
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message});
       }
} ;

// implementation to edit the details of cart by ID
export async function deleteCart(req,res){
    const cartId = req.params.id;
    try{
       const deletedCart = await cartModel.deleteOne({_id:cartId});
       if(!deletedCart){
        return res.status(404).json({Message:"Cart not found"});
       }
       res.status(202).json(deletedCart);
    }
    catch(err){
        res.status(500).json({Message:"Server Error", Error:err.message});
       }
};
