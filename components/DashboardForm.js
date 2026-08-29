"use client";

import { useState } from "react";
import { Save, Eye, EyeOff } from "lucide-react";

import { updateUser } from "@/actions/userActions";

export default function DashboardForm({ user }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form
            action={updateUser}
            className="mx-auto flex w-full flex-col gap-1.5"
        >
            {/* Name */}
            <label className="mt-1 text-sm font-semibold text-slate-200">
                Name
            </label>

            <input
                type="text"
                defaultValue={user.name || ""}
                readOnly
                className="mb-1 h-10 rounded-lg border border-slate-600 bg-slate-700 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            />

            {/* Email */}
            <label className="mt-1 text-sm font-semibold text-slate-200">
                Email
            </label>

            <input
                type="email"
                defaultValue={user.email || ""}
                readOnly
                className="mb-1 h-10 rounded-lg border border-slate-600 bg-slate-700 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            />

            {/* Username */}
            <label className="mt-1 text-sm font-semibold text-slate-200">
                Username
            </label>

            <input
                type="text"
                name="username"
                autoComplete="username"
                placeholder="Enter your username"
                className="mb-1 h-10 w-full rounded-lg border border-slate-600 bg-slate-700 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            />

            {/* Profile Picture */}
            <label className="mt-1 text-sm font-semibold text-slate-200">
                Profile Picture
            </label>

            <input
                type="url"
                name="image"
                defaultValue={user.image || ""}
                placeholder="Enter profile picture URL"
                className="mb-1 h-10 w-full rounded-lg border border-slate-600 bg-slate-700 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            />

            {/* Cover Picture */}
            <label className="mt-1 text-sm font-semibold text-slate-200">
                Cover Picture
            </label>

            <input
                type="url"
                name="cover"
                defaultValue={user?.cover || ""}
                placeholder="Enter cover picture URL"
                className="mb-1 h-10 w-full rounded-lg border border-slate-600 bg-slate-700 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            />

            {/* Razorpay ID */}
            <label className="mt-1 text-sm font-semibold text-slate-200">
                Razorpay ID
            </label>

            <input
                type="text"
                name="razorpayId"
                placeholder="Enter Razorpay ID"
                className="mb-2 h-10 w-full rounded-lg border border-slate-600 bg-slate-700 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            />

            {/* Razorpay Secret */}
            <label className="mt-1 text-sm font-semibold text-slate-200">
                Razorpay Secret
            </label>

            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    name="razorpaySecret"
                    autoComplete="new-password"
                    placeholder="Enter Razorpay Secret"
                    className="mb-2 h-10 w-full rounded-lg border border-slate-600 bg-slate-700 px-3 pr-10 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 rounded-md p-1 text-slate-400 transition hover:bg-slate-600 hover:text-white"
                    aria-label={
                        showPassword ? "Hide password" : "Show password"
                    }
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            {/* Save */}
            <button
                type="submit"
                className="mt-3 flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-500 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
                <Save size={17} />
                Save
            </button>
        </form>
    );
}
