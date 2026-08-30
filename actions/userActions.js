"use server";

import { getSession } from "@/lib/auth-server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Payment from "@/models/Payment";
import { revalidatePath } from "next/cache";

// Update user information
export async function updateUser(formData) {
    const session = await getSession();

    if (!session?.user?.email) {
        throw new Error("Unauthorized");
    }

    const username = formData.get("username");
    const image = formData.get("image");
    const cover = formData.get("cover");
    const razorpayId = formData.get("razorpayId");
    const razorpaySecret = formData.get("razorpaySecret");

    await connectDB();

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
        throw new Error("User not found");
    }

    const oldUsername = user.username;

    await User.findOneAndUpdate(
        { email: session.user.email },
        {
            username,
            image,
            cover,
            razorpayId,
            razorpaySecret,
        },
        { returnDocument: "after" },
    );

    // Update existing payments if username changed
    if (oldUsername !== username) {
        await Payment.updateMany(
            { to_user: oldUsername },
            { $set: { to_user: username } },
        );
    }

    revalidatePath(`/dashboard`);
}

// Get user by username
export async function getUserByUsername(username) {
    await connectDB();

    const user = await User.findOne({ username }).lean();

    if (!user) {
        return null;
    }

    return user;
}

// Get user by email
export async function getUserByEmail(email) {
    await connectDB();

    const user = await User.findOne({ email }).lean();

    if (!user) {
        return null;
    }

    return JSON.parse(JSON.stringify(user));
}
