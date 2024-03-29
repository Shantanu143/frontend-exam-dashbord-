import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter Email"],
        unique: [true, "Email Already Exist"],
        min: 6
    },
    username: {
        type: String,
        unique: [true, "user name is not awailable"],
        required: [true, "Please enter usename"],
    },
    role: {
        type:  String,
        enum: ["user", "examer", "admin"],
        default: "user"
    },
    avatar: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    gender: {
        type: String,
        enul: ["male", "female", "other"]
    },
    password: {
        type: String,
        min: 5,
        required: true
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);

export default User;