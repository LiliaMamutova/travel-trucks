import { Metadata } from "next";
import css from "./not-found.module.css";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "404 - Page not found | Travel Trucks",
    description: "Page not found",
    openGraph: {
        title: "404 - Page not found | Travel Trucks",
        description: "Page not found",
        images: [
            {
                url: "/travel-trucks.webp",
                height: 1200,
                width: 630,
                alt: "Travel Trucks",
            },
        ],
        url: process.env.NEXT_PUBLIC_SITE_URL,
        type: "website",
    },
};

export default function NotFoundPage() {
    return (
        <div className={clsx("container", css.centered)}>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>
                Sorry, the page you are looking for does not exist.
            </p>
        </div>
    );
};
