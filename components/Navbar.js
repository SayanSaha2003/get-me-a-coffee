"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { authClient, logout } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = ({ user }) => {
    const { data: session } = authClient.useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        router.push("/");
    };

    return (
        <nav className="relative flex h-14 items-center justify-between border-b border-gray-700 bg-[#111827] px-6">
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

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="cursor-pointer text-white md:hidden"
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 md:flex">
                {" "}
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
                    // For logged-in users
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

                            {/* Dropdown Menu */}
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
                                        href={`/${user.username}`}
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
                    // For non-logged-in users
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
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-14 z-50 w-full border-b border-gray-700 bg-[#111827] px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-white hover:text-gray-300"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-white hover:text-gray-300"
                        >
                            About
                        </Link>

                        {session ? (
                            // For logged-in users
                            <>
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-white hover:text-gray-300"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    href={`/${user.username}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-white hover:text-gray-300"
                                >
                                    Your Page
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="w-fit rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            // For non-logged-in users
                            <>
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-white hover:text-gray-300"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    href="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-fit rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white"
                                >
                                    Login
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
