// express:- 
// mongoose:- help to connect with database
// json webtoken:-help to create auth system
// bcrypt:- using this we encrypt data of user and store in database
// cors:- connect frontend with backend
// dotenv:- we can use enviroment variable in project
// body-parser:- parse data coming from user
// multer:- we can create image store system
// stripe:- for payment gateway
// validator:- check if password or email id is valid or not.
// nodemon:- when we save project the server will be started
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
// when we want to hit any url on web browser we use get method
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://akshatjain:akshat949@cluster0.cuqj5rt.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0