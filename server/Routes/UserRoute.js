import express from "express"
import User from "../model/UserMode.js"
import bcrypt from "bcrypt";
import { ErrorHandler } from "../utils/ErrorHandler.js";

const Router = express.Router();

Router.post("/create", async (req, res, next) => {
    try {

        const { username, email, gender, password } = req.body;
        const hashPass = bcrypt.hashSync(password, 10);

        const user = await User.create({
            email,
            username,
            gender,
            password: hashPass
        })

        const { password: pass, createdAt, updatedAt, __v, ...rest } = await user._doc

        res.status(201).json({
            success: true,
            message: "User has been created successfully",
            user: rest
        })

    } catch (error) {
        next(error)
    }
})

export default Router;