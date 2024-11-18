
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../Models/user.model.js";

// implementation for register-end point
export function createUser(req,res){
     const user = req.body;

     // password hashing 
     bcrypt.genSalt(10,(err,salt) => {
      if(!err){
        bcrypt.hash(user.password, salt, async(err, hpass)=>{
          if(!err){
            user.password = hpass;
            try{
              const newUser = await userModel.create(user);
              res.status(201).json(newUser);
            }
            catch(err){
               res.status(500).json({Message:"Server Error", Error:err.message});
            }
          }
        })
      }
     })  
}

// implementation for Login end point
export async function loginUser(req,res){
  const userCred = req.body;
  try{
    const user = await userModel.findOne({email:userCred.email})
    if(user != null){
      // compare hash password and user pasword
        bcrypt.compare(userCred.password, user.password, (err,success)=>{
          if(success == true){
             jwt.sign({email:userCred.email}, "secreteKey", (err,token)=>{
              if (!err){
                res.status(200).json({Message : "Login success", Token :token, userId:user._id, name:user.name, email:user.email})
              }
             })
          }else{
            res.status(404).json({Message:"Invalid password"})
          }
        })
    }else{
      res.status(404).json({Message:"User not found"})
    }
  }
  catch(err){
    res.status(500).json({Message:"Server Error", Error:err.message});
 }
};