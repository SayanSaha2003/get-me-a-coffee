import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="flex min-h-112.5 flex-col items-center justify-center px-6 text-center">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                    <Image
                        src="/logo.png"
                        alt="Get Me a Coffee Logo"
                        width={100}
                        height={100}
                        className="h-auto w-auto"
                    />

                    <h1 className="text-5xl font-bold md:text-6xl">
                        Get Me A Coffee
                    </h1>
                </div>

                <p className="mt-6 max-w-2xl text-lg text-gray-300">
                    A crowdfunding platform for creators to get support from
                    their fans and followers.
                </p>

                <p className="mt-4 max-w-2xl text-lg text-gray-300">
                    Unleash the power of your fans and get your projects funded.
                </p>

                <div className="mt-7 flex gap-4">
                    <Link
                        href="/login"
                        className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold transition hover:scale-105"
                    >
                        Start Here
                    </Link>

                    <Link
                        href="/about"
                        className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold transition hover:scale-105"
                    >
                        Read More
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="border-t border-gray-700 px-6 py-16">
                <h2 className="text-center text-3xl font-bold">
                    Your Fans can buy you a Coffee
                </h2>

                <div className="mx-auto mt-16 grid max-w-6xl gap-14 md:grid-cols-3">
                    <div className="text-center">
                        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-300 text-5xl">
                            ❤️
                        </div>
                        <h3 className="text-xl font-semibold">
                            Fans want to help
                        </h3>
                        <p className="mt-4 text-gray-300">
                            Your fans are available to support you.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-300 text-5xl">
                            💰
                        </div>
                        <h3 className="text-xl font-semibold">
                            Fans want to contribute
                        </h3>
                        <p className="mt-4 text-gray-300">
                            Your fans are willing to contribute financially.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-300 text-5xl">
                            🤝
                        </div>
                        <h3 className="text-xl font-semibold">
                            Fans want to collaborate
                        </h3>
                        <p className="mt-4 text-gray-300">
                            Your fans are ready to collaborate with you.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="border-t border-gray-700 px-6 py-16">
                <h2 className="text-center text-3xl font-bold">
                    Learn more about us
                </h2>

                <div className="mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-lg bg-black">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/QtaorVNAwbI?si=6piEhlgA-W1OUpMf"
                        title="Get Me A Coffee"
                        allowFullScreen
                    />
                </div>
            </section>
        </main>
    );
}
