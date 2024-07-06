import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://akshatjain:akshat949@cluster0.cuqj5rt.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}