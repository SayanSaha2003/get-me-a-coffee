"use server";

import Razorpay from "razorpay";

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Payment from "@/models/Payment";
import { revalidatePath } from "next/cache";

// Create a new  order and return the order details to the client
export async function initiatePayment(username, paymentForm) {
    await connectDB();

    // find the user
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("User not found");
    }
    if (!user.razorpayId || !user.razorpaySecret) {
        throw new Error("Razorpay credentials are not configured");
    }
    const { name, message, amount } = paymentForm;

    // Initialize Razorpay instance and create an order
    const razorpay = new Razorpay({
        key_id: user.razorpayId,
        key_secret: user.razorpaySecret,
    });

    const order = await razorpay.orders.create({
        amount: Number.parseInt(amount) * 100,
        currency: "INR",
    });

    // Return the order details to the client
    return {
        razorpay_id: user.razorpayId,
        id: order.id,
        amount: order.amount,
    };
}

// Save the payment details to the database
export async function savePayment(username, paymentForm, orderId) {
    await connectDB();

    const { name, message, amount } = paymentForm;

    await Payment.create({
        order_id: orderId,
        to_user: username,
        amount: Number.parseInt(amount),
        name,
        message,
    });

    revalidatePath(`/${username}`);

    return { success: true };
}

// Get the last 10 payments received by a user
export async function getPayments(username) {
    await connectDB();

    const payments = await Payment.find({
        to_user: username,
    })
        .sort({ amount: -1 })
        .limit(10)
        .lean();

    return payments.map((payment) => ({
        name: payment.name,
        amount: payment.amount,
        message: payment.message,
    }));
}
