import { getSession } from "@/lib/auth-server";

export default async function Dashboard () {
    const session = await getSession();

    return (
        <main>
            <h1>Welcome {session.user.name} to the Dashboard</h1>
        </main>
    );
};


