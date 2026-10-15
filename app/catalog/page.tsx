import { Metadata } from "next";
import {CatalogClient} from "./Catalog.client";

export const metadata: Metadata = {
    title: "Catalog | TravelTrucks",
    description: "Find and rent a camper for your next trip",
    openGraph: {
        title: "Catalog | TravelTrucks",
        description: "Find and rent a camper for your next trip",
        images: [
            {
                url: "/travel-trucks.webp",
                width: 1200,
                height: 630,
                alt: "TravelTrucks",
            },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog`,
        type: "website",
    },
};

export default function CatalogPage() {
    return <CatalogClient />;
}