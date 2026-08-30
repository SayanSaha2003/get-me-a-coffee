import DashboardForm from "@/components/DashboardForm";
import { getSession } from "@/lib/auth-server";
import { getUserByEmail } from "@/actions/userActions";

export default async function Dashboard() {
    const session = await getSession();

    const user = await getUserByEmail(session.user.email);

    return (
        <main className="min-h-[calc(100vh-56px)] bg-[#020817] px-4 py-10 text-white sm:px-6">
            <div className="mx-auto w-full max-w-lg">
                {/* Heading */}
                <h1 className="text-center text-3xl font-bold tracking-tight">
                    Welcome to your Dashboard
                </h1>

                <p className="mx-auto mt-2 max-w-md text-center text-sm text-slate-400">
                    Keep your creator profile and payment details up to date.
                </p>

                {/* Profile Form */}
                <div className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-2xl shadow-black/20 sm:p-7">
                    <DashboardForm user={user}  />
                </div>
            </div>
        </main>
    );
}
