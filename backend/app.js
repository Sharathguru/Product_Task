import express from 'express';
// import taskRouter from './routes/task.routes.js';
import productRoutes from './routes/product.routes.js';
import dotenv from "dotenv";
dotenv.config();
import connnectDB from './config/db.js';
import cors from 'cors';
connnectDB();

let app=express();




//middleware
app.use(express.json())
app.use(cors())
// cors is a package that allows you to enable Cross-Origin Resource Sharing (CORS) in your Express application.
// It allows your server to accept requests from different origins (domains) than the one it is running on.

// express.json is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
// It is a part of Express.js framework.
// It is used to parse the JSON data in the request body and make it available in req.body
// Endpoint to get all the tasks from the database
// if we won't use this middleware then we will get an error "Cannot read property 'task' of undefined"
// because req.body will be undefined
// we can also use body-parser middleware to parse the JSON data in the request body

// app.use("/tasks",taskRouter)
app.use("/api/v1/product", productRoutes);


export default app;
