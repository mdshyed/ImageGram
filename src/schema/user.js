import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  
    username:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 20
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50,
        validate:{
            validator: function(emailValue){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
            },
            message: "Invalid email format"
        },
    },
    password:{
        type: String,
        required: true,
        minLength: 5
    }

   
}, { timestamps: true });

userSchema.pre('save', function modifyPassword(next){
       const user = this;
       const SALT = bcrypt.genSaltSync(9);

       // hash password

       const hashPassword = bcrypt.hashSync(user.password, SALT);
       user.password = hashPassword;
       next();
})

const user = mongoose.model("User",userSchema); // user collection
export default user;