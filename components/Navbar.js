"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { authClient, logout } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        setIsDropdownOpen(false);
        router.push("/");
    };

    return (
        <nav className="flex h-14 items-center justify-between border-b border-gray-700 bg-[#111827] px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="Get Me a Coffee Logo"
                    width={42}
                    height={42}
                    className="h-auto w-auto"
                />

                <span className="text-base font-bold text-white">
                    Get Me a Coffee!
                </span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-5">
                <Link
                    href="/"
                    className="text-sm text-white hover:text-gray-300"
                >
                    Home
                </Link>

                <Link
                    href="/about"
                    className="text-sm text-white hover:text-gray-300"
                >
                    About
                </Link>

                {session ? (
                    <div className="flex items-center gap-2">
                        {/* Account Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                                className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 cursor-pointer"
                            >
                                Account
                                <ChevronDown size={16} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 top-11 z-50 w-36 rounded-lg bg-gray-700 py-2 shadow-lg">
                                    <Link
                                        href="/dashboard"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        href="/your-page"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                                    >
                                        Your Page
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link
                            href="/dashboard"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                        >
                            Dashboard
                        </Link>

                        {/* Login */}
                        <Link
                            href="/login"
                            className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
