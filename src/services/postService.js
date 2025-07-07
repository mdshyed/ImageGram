export const createPost = async (createPostObject) => {
    try{
        const newPost = await Post.create(createPostObject);
        return newPost;
    }
    catch(error){
        console.log(error);
    }

}