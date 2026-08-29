"use client";

import { initiatePayment } from "@/actions/paymentActions";
import { useState } from "react";
import Script from "next/script";

export default function PaymentForm({ username }) {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        amount: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, message, amount } = formData;

        if (!name || !amount) {
            alert("Please fill in the required fields.");
            return;
        }

        // Initiate payment and get the order details from the server
        const order = await initiatePayment(username, formData);

        // Open Razorpay checkout with the order details
        const options = {
            key: order.razorpay_id,
            order_id: order.id,
            amount: order.amount,
            currency: "INR",
            name: "Get Me a Coffee",
            description: "Support your favorite creator",
            handler: async function (response) {
                console.log("Payment successful:", response);
            },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    const amounts = [20, 50, 100, 200, 500];

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <div className="rounded-lg bg-[#111827] p-6">
                <h2 className="text-xl font-bold">Make a Payment</h2>

                <form
                    className="mt-6 flex flex-col gap-2"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        className="h-10 rounded-lg bg-slate-800 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Message"
                        className="h-10 rounded-lg bg-slate-800 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter Amount"
                        className="h-10 rounded-lg bg-slate-800 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="mt-1 h-10 cursor-pointer rounded-lg bg-linear-to-r from-purple-300 to-slate-400 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Pay
                    </button>
                </form>

                <div className="mt-5 grid grid-cols-5 gap-2">
                    {amounts.map((amt) => (
                        <button
                            key={amt}
                            type="button"
                            onClick={() =>
                                setFormData({ ...formData, amount: amt })
                            }
                            className="rounded-lg bg-slate-800 px-4 py-3 text-sm"
                        >
                            Pay ₹{amt}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
