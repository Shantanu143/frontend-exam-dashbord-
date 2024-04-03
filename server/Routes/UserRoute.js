import express from "express"
import User from "../model/UserMode.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { ErrorHandler } from "../utils/ErrorHandler.js";
import verifyUser from "../utils/VerifyUser.js";

const oneFifty = 1000 * 60 * 60 * 24 * 150;

const router = express.Router();

router.post("/create", async (req, res, next) => {
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

        res.status(201)
            .json({
                success: true,
                message: "User has been created successfully",
                user: rest
            })

    } catch (error) {
        next(error)
    }
})


router.post("/get", async (req, res, next) => {
    try {

        const { email, password } = req.body;
        if (!email, !password) return next(ErrorHandler(400, "Something is meesing!"));

        const LoginUser = await User.findOne({ email });

        if (!LoginUser) return next(ErrorHandler(400, "User not exist!"));

        const passOk = bcrypt.compareSync(password, LoginUser.password)
        if (!passOk) return next(ErrorHandler(400, "Wrong password!"));

        const token = jwt.sign({ _id: LoginUser._id, role: LoginUser.role, email: LoginUser.email }, process.env.JWT_SECRET, { subject: "exam" })

        const { password: pass, createdAt, updatedAt, __v, ...rest } = LoginUser._doc

        res.cookie("_Admin_access_account", token, { secure: true, maxAge: oneFifty }).status(200).json({
            success: true,
            message: "admin login success"
        });

    } catch (error) {
        next(error)
    }
})

router.get("/all", verifyUser, async (req, res, next) => {
    try {

        const getAll = await User.find({ role: "user" });

        res.status(200).json({
            success: true,
            user: getAll
        })

    } catch (error) {
        next(error);
    }
})



export default router;