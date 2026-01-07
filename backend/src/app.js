import express from 'express';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';
const app = express(); 
app.use(express.json());


// route import 
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/posts",postRoutes)

// example router :https://localhost:5000/api/v1/users/register

export default app;

