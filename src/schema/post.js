import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.type.ObjectId,
        ref: "User"

    }
}, { timestamps: true});


const post = mongoose.model("Post", postSchema);
export default post;