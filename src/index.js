import express from 'express';
import connectDB from './config/dbConfig.js';
import postRouter from './router/post.js';
import userRouter from './router/user.js';


const app = express();

const PORT = 3000;


app.use(express.json());
 app.use(express.urlencoded());
app.use(express.text());



// app.get('/', (req,res)=> {
//     return res.send("hello world");
// })

// app.get('/about', (req,res)=> {
//     return res.json({message:"about page"});
// })

app.use('/post', postRouter);
app.use('/user', userRouter)

app.use((req, res, next) => {
    console.log('Request body:', req.body);
    next();
});
app.get('/ping', (req, res) => {
    return res.send("hello world");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})