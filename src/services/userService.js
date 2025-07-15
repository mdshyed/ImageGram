import { createUser } from "../repositories/userRepository.js";
import { findUserByEmail } from "../repositories/userRepository.js";
import { generateJwtToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";
export const signUpUserService = async (user) => {
    try{
        const newUser = await createUser(user);
        return newUser;
    }
    catch(error){
        console.log(error);
    }
}

export const signinUserService = async (userDetail) => {
    try {
         const user = await findUserByEmail(userDetail.email);
         if(!user){
            throw {
                    status: 404,
                    message: "User not found"
            }
            
         }
         const isPasswordValid = bcrypt.compareSync(userDetail.password, user.password);
         if(!isPasswordValid){
            throw {
                status: 401,
                message: "Invalid password"
            }
         }
         const token = generateJwtToken({
            id: user._id,
            email: user.email,
            username: user.username
         });
         return token

    } catch(error){
        throw error
    }
}