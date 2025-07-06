import mongoose from "mongoose";

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

const user = mongoose.model("User",userSchema); // user collection
export default user;