import express from "express"
import User from "../model/UserMode.js"

const Router = express.Router();

Router.post("/create", async(req, res, next)=> {
    try {

        const { username, email, password } = req.body;
        const user = await User.create({
            email,
            username,
            password
        })

        const { password: pass, createdAt, updatedAt, __v, ...rest } = await user._doc

        res.status(201).json({
            status: true,
            user: rest
        })

    } catch (error) {
        next(error)
    }
})

export default Router;