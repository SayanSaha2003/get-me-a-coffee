import Image from "next/image";
import { getSession } from "@/lib/auth-server";
import { CircleUser } from "lucide-react";

export default async function YourPage() {
    const session = await getSession();
    const user = session.user;

    const supporters = [
        { name: "Vijay", amount: "₹46666", message: "Loan ke paise hain" },
        { name: "Harry", amount: "₹45500", message: "Le lo bhia" },
        { name: "Kriti", amount: "₹566", message: "Rakh lo bhaiya" },
        { name: "Harry", amount: "₹200", message: "200 rs le lo" },
        {
            name: "Shubh",
            amount: "₹122",
            message: "bhai rakh lena toffee kha lena",
        },
        { name: "Rohan", amount: "₹46", message: "nahi dunga" },
        { name: "Harry", amount: "₹45", message: "testing" },
        { name: "Harry", amount: "₹45", message: "sdfsdfs" },
        {
            name: "Hariyaa",
            amount: "₹4",
            message: "Thanks for providing this option",
        },
    ];

    return (
        <main className="min-h-[calc(100vh-56px)] bg-[#020817] text-white">
            {/* Cover Image */}
            <div className="h-72 w-full overflow-hidden sm:h-80">
                <Image
                    src="/cover.gif"
                    alt="Cover"
                    width={1920}
                    height={400}
                    className="h-full w-full object-cover"
                />
            </div>

            <section className="relative px-4 pb-10 sm:px-6">
                {/* Profile Section */}
                <div className="mx-auto -mt-16 flex max-w-5xl flex-col items-center text-center">
                    {/* Profile Image */}
                    <Image
                        src={user.image || "/default-profile.jpg"}
                        alt="Profile"
                        width={128}
                        height={128}
                        className="h-32 w-32 rounded-full border-4 border-[#020817] object-cover"
                    />

                    <h1 className="mt-4 text-2xl font-bold">@{user.name}</h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Lets help {user.name} get a coffee!
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                        9 Payments · ₹93194 raised
                    </p>
                </div>

                {/* Payment Section */}
                <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
                    {/* Top Supporters */}
                    <div className="rounded-lg bg-[#111827] p-6">
                        <h2 className="text-xl font-bold">Top 10 Supporters</h2>

                        <div className="mt-6 space-y-5">
                            {supporters.map((supporter, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-sm"
                                >
                                    <CircleUser
                                        size={24}
                                        className="mt-0.5 shrink-0 text-slate-400"
                                        aria-hidden="true"
                                    />

                                    <p className="text-slate-200">
                                        {supporter.name} donated{" "}
                                        <span className="font-bold">
                                            {supporter.amount}
                                        </span>{" "}
                                        with a message: {supporter.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="rounded-lg bg-[#111827] p-6">
                        <h2 className="text-xl font-bold">Make a Payment</h2>

                        <form className="mt-6 flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="h-10 rounded-lg bg-slate-800 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="text"
                                placeholder="Enter Message"
                                className="h-10 rounded-lg bg-slate-800 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="number"
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

                        <div className="mt-5 flex gap-2">
                            <button className="rounded-lg bg-slate-800 px-4 py-3 text-sm">
                                Pay ₹10
                            </button>

                            <button className="rounded-lg bg-slate-800 px-4 py-3 text-sm">
                                Pay ₹20
                            </button>

                            <button className="rounded-lg bg-slate-800 px-4 py-3 text-sm">
                                Pay ₹30
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
