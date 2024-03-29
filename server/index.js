import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from 'cookie-parser'

import User from "./Routes/UserRoute.js"
import Exam from "./Routes/Exam.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }))
app.use(cookieParser());

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
app.use("/api/exam", Exam)

app.use((err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";

    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            statusCode: 303,
            message: "User already exist!"
        })
    }

    if (err.name === "ValidationError") {
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: "Some Fields are missing!"
        })
    }

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message: message,
        err
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})