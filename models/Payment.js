import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        message: {
            type: String,
        },
        amount: {
            type: Number,
            required: true,
        },
        to_user: {
            type: String,
            ref: "User",
            required: true,
        },
        order_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export default mongoose.models.Payment ||
    mongoose.model("Payment", paymentSchema);
