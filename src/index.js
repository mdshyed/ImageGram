import express from 'express';
import connectDB from './config/dbconfig.js';
import {createPost} from './controllers/postControllers.js';

const app = express();

const PORT = 3000;
app.get('/', (req,res)=> {
    return res.send("hello world");
})

app.get('/about', (req,res)=> {
    return res.json({message:"about page"});
})




app.post('/post', createPost);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})