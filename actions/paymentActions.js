"use server";

import Razorpay from "razorpay";

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Payment from "@/models/Payment";

// Get all payments for a user
export async function initiatePayment(username, paymentForm) {
    await connectDB();
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("User not found");
    }
    if (!user.razorpayId || !user.razorpaySecret) {
        throw new Error("Razorpay credentials are not configured");
    }
    const { name, message, amount } = paymentForm;

    // Initialize Razorpay instance with user's credentials
    const razorpay = new Razorpay({
        key_id: user.razorpayId,
        key_secret: user.razorpaySecret,
    });

    // Create a new order
    const order = await razorpay.orders.create({
        amount: Number.parseInt(amount) * 100,
        currency: "INR",
    });

    // Store the payment details in the database
    await Payment.create({
        order_id: order.id,
        amount: Number.parseInt(amount),
        to_user: username,
        name,
        message,
    });

    // Return the order details to the client
    return {
        razorpay_id: user.razorpayId,
        id: order.id,
        amount: order.amount,
    };
}
