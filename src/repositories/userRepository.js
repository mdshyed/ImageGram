import User from "../schema/user.js";

export const findUserByEmail = async (email) => {
    try{
          const user = await User.findOne({email});
          return user;
    }
    catch(error){
        console.log(error);
    }
}

export const findAllUsers = async () => {
    try{
        const allUsers = await User.find();
        return allUsers;
    }
    catch(error){
        console.log(error);
    }
}