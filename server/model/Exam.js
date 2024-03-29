import mongoose from "mongoose";

const ExamShema = new mongoose.Schema({
    questions: {
        type: Array,
        required: [true, "Atlist add one question"],
        default: [],
    },
    name: {
        type: String,
        unique: true,
        required: [true, "Please provide exam name"],
    },
    exam_number: {
        type: String,
        required: [true, "Please provide exam number"]
    },
    date: {
        type: Date,
        required: [true, "Provide exam date"]
    },
    students: [
        {
            email: String,
            name: String,
            unique: true,
            id: {
                type: mongoose.Types.ObjectId,
                ref: "User"
            },
        }
    ],
    enrolled: [
        {
            email: String,
            name: String,
            id: {
                type: mongoose.Types.ObjectId,
                ref: "User"
            },
        }
    ],
    submited: [
        {
            email: String,
            name: String,
            id: {
                type: mongoose.Types.ObjectId,
                ref: "User"
            },
            Attended: {
                type: Array,
                default: []
            },
        }
    ],
}, {
    timestamps: true
})

const Exam = mongoose.model("Exam", ExamShema);

export default Exam;