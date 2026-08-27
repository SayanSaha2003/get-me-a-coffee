import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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

            {/* Navigation + Login */}
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

                <Link
                    href="/dashboard"
                    className="text-sm text-white hover:text-gray-300"
                >
                    Dashboard
                </Link>

                <Link
                    href="/login"
                    className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
