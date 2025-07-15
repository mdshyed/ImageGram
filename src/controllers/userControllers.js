
import {signUpUserService} from "../services/userService.js";
import {signinUserService} from "../services/userService.js";
export async function getProfile(req,res){
    return res.status(404).json({
        success:false,
        message:"user not found"
    });
}

export async function signup(req, res){
    try{
        const user = await signUpUserService(req.body);
         return res.status(201).json({
            success: true,
            message : "user created successfully",
            data: user
         });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        
        });
    }
}

export async function signin(req,res){
    try{
        const response = await signinUserService(req.body);
        return res.status(200).json({
            success: true,
            message : "user signed in successfully",
            data: response
         });

    } catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        
        });
    }
}