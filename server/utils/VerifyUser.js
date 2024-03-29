import jwt from "jsonwebtoken"
import { ErrorHandler } from "./ErrorHandler.js";

const verifyUser = async (req, res, next) => {
    const token = req.cookies._account_data_01;

    if (!token) return next(ErrorHandler(404, "Cookies Login Needed!"));

    jwt.verify(token, process.env.TOKEN, (err, user) => {
        if (err) return next(ErrorHandler(401, "Invalid Cookies"));

        req.user = user;
        next();
    })
}

export default verifyUser