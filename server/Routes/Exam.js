import express from "express";
import verifyUser from "../utils/VerifyUser.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import Exam from "../model/ExamModel.js";

const router = express.Router();

router.post("/create", verifyUser, async (req, res, next) => {
    try {
        const { role, email, id: UserId } = req.user;
        const { examName: name, examNumber: exam_number, date, questions, students } = req.body;

        if (role != "admin") return next(ErrorHandler(400, "Bad exam creation request!"));

        const newExam = await Exam.create({
            name,
            exam_number,
            date,
            questions,
            students
        })

        res.send("okk");
    } catch (error) {
        next(error);
    }
})

export default router;