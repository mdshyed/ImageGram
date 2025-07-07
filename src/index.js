import express from 'express';
import connectDB from './config/dbconfig.js';
import {createPost} from './controllers/postControllers.js';
import {s3uploader} from './config/multerConfig.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.text());


app.get('/', (req,res)=> {
    return res.send("hello world");
})

app.get('/about', (req,res)=> {
    return res.json({message:"about page"});
})




app.post('/post', s3uploader.single('image'), createPost);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})