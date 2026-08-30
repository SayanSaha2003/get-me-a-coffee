import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { getUserByEmail } from "@/actions/userActions";
import { getSession } from "@/lib/auth-server";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Get Me a Coffee",
    description:
        "This is a crowdfunding platform for creators to get support from their fans and followers.",
};

export default async function RootLayout({ children }) {
    const session = await getSession();

    const user = session?.user?.email
        ? await getUserByEmail(session.user.email)
        : null;

    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Navbar user={user} />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
