import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        min: 6
    },
    username: {
        type: String,
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
        min: 5
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);

export default User;