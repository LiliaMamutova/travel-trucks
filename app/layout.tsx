import type {Metadata} from "next";
import {Inter, Manrope} from "next/font/google";
import "./globals.css";
import "@/components/ui/common.css"
import Header from "@/components/sections/Header/Header";
import {Toaster} from "react-hot-toast";
import TanStackQueryProvider from "@/components/providers/TanStackQueryProvider/TanStackQueryProvider";

const inter = Inter({
    style: "normal",
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    style: "normal",
    weight: ["400", "500"],
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "TravelTrucks",
    description: "Camper rental service for your perfect road trip",
    openGraph: {
        title: "TravelTrucks",
        description: "Camper rental service for your perfect road trip",
        images: [
            {
                url: "/campers.webp",
                width: 1200,
                height: 630,
                alt: "TravelTrucks",
            },
        ],
        url: process.env.NEXT_PUBLIC_SITE_URL,
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
        <body>
        <TanStackQueryProvider>
            <Toaster/>
            <Header/>
            <main>
                {children}
                {/*{modal}*/}
            </main>
        </TanStackQueryProvider>
        </body>
        </html>
    );
};

