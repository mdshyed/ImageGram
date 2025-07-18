import { createPost } from "../repositories/postRepository.js";
export const createPostService = async (createPostObject) => {
   const caption = createPostObject.caption;
   const image = createPostObject.image;
   
   const post = await createPost(caption, image);
   return post;

}