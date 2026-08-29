"use server";

import { getSession } from "@/lib/auth-server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

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
