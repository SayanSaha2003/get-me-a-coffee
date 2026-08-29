import Image from "next/image";
import { CircleUser } from "lucide-react";

import { getUserByUsername } from "@/actions/userActions";
import PaymentForm from "@/components/PaymentForm";

export default async function UserPage({ params }) {
    const { username } = await params;

    const user = await getUserByUsername(username);

    if (!user) {
        return <div>User not found</div>;
    }

    const supporters = [
        { name: "Vijay", amount: "₹46666", message: "Loan ke paise hain" },
        { name: "Harry", amount: "₹45500", message: "Le lo bhia" },
        { name: "Kriti", amount: "₹566", message: "Rakh lo bhaiya" },
        { name: "Harry", amount: "₹200", message: "200 rs le lo" },
        { name: "Rohan", amount: "₹46", message: "nahi dunga" },
        { name: "Harry", amount: "₹45", message: "testing" },
        { name: "Harry", amount: "₹45", message: "sdfsdfs" },
    ];

    return (
        <main className="min-h-[calc(100vh-56px)] bg-[#020817] text-white">
            {/* Cover Image */}
            <div className="h-72 w-full overflow-hidden sm:h-80">
                <Image
                    src={user.cover || "/cover.gif"}
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

                    <h1 className="mt-4 text-2xl font-bold">
                        @{user.username}
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Let&apos;s help {user.name} get a coffee!
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

                    {/* Payment Form */}
                    <PaymentForm username={username} />
                </div>
            </section>
        </main>
    );
}
