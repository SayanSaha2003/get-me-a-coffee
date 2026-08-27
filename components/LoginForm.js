"use client";

import Image from "next/image";
import { loginWithGoogle, loginWithGithub } from "@/lib/auth-client";

export default function LoginForm() {
    return (
        <div className="flex w-full max-w-xs flex-col gap-3">
            <button
                onClick={loginWithGoogle}
                className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 cursor-pointer"
            >
                <Image
                    src="/google.svg"
                    alt="Google Logo"
                    width={24}
                    height={24}
                    className="mr-4"
                />
                Continue with Google
            </button>

            <button
                onClick={loginWithGithub}
                className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 cursor-pointer"
            >
                <Image
                    src="/github.svg"
                    alt="Github Logo"
                    width={24}
                    height={24}
                    className="mr-4"
                />
                Continue with Github
            </button>

            <button className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 cursor-pointer">
                <Image
                    src="/linkedin.svg"
                    alt="LinkedIn Logo"
                    width={24}
                    height={24}
                    className="mr-4"
                />
                Continue with LinkedIn
            </button>

            <button className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 cursor-pointer">
                <Image
                    src="/twitter.svg"
                    alt="Twitter Logo"
                    width={24}
                    height={24}
                    className="mr-4"
                />
                Continue with Twitter
            </button>

            <button className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 cursor-pointer">
                <Image
                    src="/facebook.svg"
                    alt="Facebook Logo"
                    width={24}
                    height={24}
                    className="mr-4"
                />
                Continue with Facebook
            </button>

            <button className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 cursor-pointer">
                <Image
                    src="/apple.svg"
                    alt="Apple Logo"
                    width={24}
                    height={24}
                    className="mr-4"
                />
                Continue with Apple
            </button>
        </div>
    );
}
