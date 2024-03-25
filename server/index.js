import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import User from "./Routes/UserRoute.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }))

const PORT = process.env.PORT || 3300;
const MONGO_URL = process.env.MONGO_URL;

try {
    mongoose.connect(MONGO_URL)
    console.log("Database is connected");
} catch (error) {
    console.log("Database is Not Connected!");
    console.log(error);
}

app.get("/api/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working"
    })
})

app.use("/api/user", User);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})