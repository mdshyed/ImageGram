import { createPostService } from "../services/postService.js";
export async function createPost(req, res){
    console.log(req.file);

    const post = await createPostService({
          caption: req.body.caption,
          image: req.file.location
    });
    return res.json({
          success:true,
          message:"post created successfully",
          data: post
    });

}

export async function getAllPosts(req, res){
    
    return res.json({
        success: true,
        message: "all posts",
        
    });
}