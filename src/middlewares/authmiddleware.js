import { verifyJwtToken } from "../utils/jwt.js";
export const isAuthenticated =  (req, res, next) => {
     const token = req.headers["x-access-token"];
     if (!token) {
          return res.status(400).json({
               success: false,
               message: "No token provided"
          });
     }
     try{
        const response = verifyJwtToken(token);
        req.user = response;
        next();
     }
     catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Invalid token",
        
        });
     }
     
}