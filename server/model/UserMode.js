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
    password: {
        type: String,
        min: 5
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);

export default User;