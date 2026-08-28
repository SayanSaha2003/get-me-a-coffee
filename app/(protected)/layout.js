import { getSession } from "@/lib/auth-server";

export default async function ProtectedLayout({ children }) {
    await getSession();

    return children;
}