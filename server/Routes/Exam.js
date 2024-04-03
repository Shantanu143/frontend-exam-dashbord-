import express from "express";
import verifyUser from "../utils/VerifyUser.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import Exam from "../model/ExamModel.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/create", verifyUser, async (req, res, next) => {

    try {
        const { role, email, _id: UserId } = req.user;
        const { name, time, exam_number, date, questions } = req.body;

        if (role != "admin") return next(ErrorHandler(400, "Bad exam creation request!"));

        console.log(req.body);

        const newExam = await Exam.create({
            name,
            creator: {
                email,
                _id: UserId
            },
            exam_number,
            time,
            date,
            questions,
        })

        res.status(200).json({
            success: true,
            message: "Exam has been created!"
        })

    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.get("/get/:name", verifyUser, async (req, res, next) => {
    try {

        const { name } = req.params;

        const isAwailable = await Exam.findOne({ name });

        if (isAwailable) {
            res.status(401).json({
                success: false,
                message: "This please provide another name for exam!"
            })

        } else {
            res.status(401).json({
                success: true,
                message: "This name is awailable"
            })
        }

    } catch (error) {
        next();
    }
})

router.post("/isAdded/:id", verifyUser, async (req, res, next) => {
    try {

        const { id } = req.params;
        const { role, _id: userId } = req.user;
        const { id: NewUserId, email, name } = req.body;

        if (role != "admin") return next(ErrorHandler(400, "Not a valid admin"))

        const getExam = await Exam.findById(id);

        const found = getExam.students.some(ele => String(ele._id) === NewUserId )

        if (!found) {
            await getExam.updateOne({
                $push: {
                    students: {
                        _id: NewUserId,
                        name: name
                    }
                }
            })

            console.log(found)

            return res.status(200).json({
                success: true,
                res : "added",
                message: `${name} added to exam`
            })
        } else {
            await getExam.updateOne({
                $pull: {
                    students: {
                        _id: NewUserId,
                        name
                    }
                }
            })

            return res.status(200).json({
                success: true,
                res : "removed",
                message: `${name} has been removed`
            })

        }

    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.get("/students/:id", async(req, res, next)=> {
    try {
        
        const { id } = req.params;
        const getExam = await Exam.findById(id);

        const { students } = await getExam._doc;

        res.status(200).json({
            success: true,
            data: students
        })

    } catch (error) {
        next(error)
    }
})

router.get("/all", verifyUser, async (req, res, next) => {
    try {

        const allExam = await Exam.find();

        res.status(200).json({
            success: true,
            exams: allExam
        })

    } catch (error) {
        next(error)
    }
})

export default router;