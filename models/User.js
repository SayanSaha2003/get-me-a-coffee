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

        image: {
            type: String,
        },

        username: {
            type: String,
            unique: true,
            sparse: true,
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
    {
        timestamps: true,
        collection: "user",
    },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
