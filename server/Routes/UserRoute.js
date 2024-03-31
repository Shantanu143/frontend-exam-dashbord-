import express from "express"
import User from "../model/UserMode.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { ErrorHandler } from "../utils/ErrorHandler.js";

const Router = express.Router();

Router.post("/create", async (req, res, next) => {
    try {

        const { username, email, gender, password, role } = req.body;
        const hashPass = bcrypt.hashSync(password, 10);

        const user = await User.create({
            email,
            username,
            gender,
            password: hashPass
        });

        const { password: pass, createdAt, updatedAt, __v, ...rest } = await user._doc

        const token = jwt.sign({ email: user.email, role: user.role, id: user._id,  }, process.env.TOKEN, {subject: "exam"});

        res.cookie("_account_data_01", token, { secure: true, maxAge: 1000 * 60 * 60 * 24 * 150 })
        .status(201)
        .json({
            success: true,
            message: "User has been created successfully",
            user: rest
        })

    } catch (error) {
        next(error)
    }
})

export default Router;