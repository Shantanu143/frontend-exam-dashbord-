import express from "express";
import verifyUser from "../utils/VerifyUser.js";

const router = express.Router();

router.post("/create", verifyUser, async (req, res, next) => {
    try {

        const data = req.body;
        const user = req.user;

        

        res.send("okk")
    } catch (error) {
        next(error);
    }
})

export default router;