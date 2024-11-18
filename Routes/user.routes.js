
import { createUser,loginUser } from "../Controllers/user.controller.js";

export function userRoutes(app){
   
   // End-point to register a new user
   app.post("/register", createUser);
   
   // End-point for login
   app.post("/login", loginUser);

};