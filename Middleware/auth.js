
import jwt from "jsonwebtoken";

// Middleware to verify token
export function verifyToken(req,res,next){

    if(req.headers.authorization !== undefined){

      const token = req.headers.authorization.split(" ")[1];

      jwt.verify(token,"secreteKey",(err,data)=>{
        if(!err){
            next();
        }else{
            res.status(403).json({Message:"Invalid token"});
        }
      })
    }else{
        res.status(404).json({Message: "Please Enter a Token"});
    }
};