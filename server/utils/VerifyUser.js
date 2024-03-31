import jwt from "jsonwebtoken"
import { ErrorHandler } from "./ErrorHandler.js";

const verifyUser = async (req, res, next) => {
    const token = req.cookies._Admin_access_account;

    if (!token) return next(ErrorHandler(404, "Cookies Login Needed!"));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err){
            console.log(err);
            return next(ErrorHandler(401, "Invalid Cookies"))};

        req.user = user;
        next();
    })
}

export default verifyUser