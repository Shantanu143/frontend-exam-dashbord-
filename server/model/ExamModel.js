import mongoose from "mongoose";

const ExamShema = new mongoose.Schema({
    questions: {
        type: Array,
        required: [true, "Atlist add one question"],
        default: [],
    },
    name: {
        type: String,
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
            email: {
                type: String,
                unique: true
            },
            name: String,
            id: {
                type: mongoose.Types.ObjectId,
                unique: true,
                ref: "User"
            },
        }
    ],
    enrolled: [
        {
            email: {
                type: String,
                unique: true
            },
            name: String,
            id: {
                type: mongoose.Types.ObjectId,
                unique: true,
                ref: "User"
            },
        }
    ],
    submited: [
        {
            email: {
                type: String,
                unique: true
            },
            name: String,
            id: {
                type: mongoose.Types.ObjectId,
                unique: true,
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