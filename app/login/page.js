import Image from "next/image";

const Login = () => {
    return (
        <main className="flex min-h-[calc(100vh-112px)] flex-col items-center px-6 py-15 text-center">
            <h1 className="mb-12 text-4xl font-bold text-white">
                Login to Get Started
            </h1>

            <div className="flex w-full max-w-xs flex-col gap-3">
                <button className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 cursor-pointer">
                    <Image
                        src="/google.svg"
                        alt="Google Logo"
                        width={24}
                        height={24}
                        className="mr-4"
                    />
                    Continue with Google
                </button>

                <button className="flex h-12 items-center rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-gray-100 curor-pointer">
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
                        src="/apple.svg"
                        alt="Apple Logo"
                        width={24}
                        height={24}
                        className="mr-4"
                    />
                    Continue with Apple
                </button>
            </div>
        </main>
    );
};

export default Login;