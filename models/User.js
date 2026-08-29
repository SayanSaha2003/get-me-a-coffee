import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        cover: {
            type: String,
        },
        razorpayId: {
            type: String,
        },
        razorpaySecret: {
            type: String,
        },
    },
    { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
