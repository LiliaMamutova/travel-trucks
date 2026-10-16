import {getCamperById, getReviews} from "@/lib/api/api";
import {Metadata} from "next";
import css from "./page.module.css";

interface CamperPageProps {
    params: Promise<{ camperId: string }>
}

export async function generateMetadata({ params }: CamperPageProps): Promise<Metadata> {
    const { camperId } = await params;
    const camper = await getCamperById(camperId);

    return {
        title: `${camper.name} | TravelTrucks`,
        description: camper.description,
        openGraph: {
            title: `${camper.name} | TravelTrucks`,
            description: camper.description,
            images: [{ url: camper.gallery[0]?.original, alt: camper.name }],
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${camperId}`,
            type: "website",
        },
    };
}



export default async function CamperPage({ params }: CamperPageProps){
    const { camperId } = await params;
    // const [ camper, reviews ] = await Promise.all([getCamperById(camperId), getReviews(camperId)])

    return (
        <div className={css.page}>
            {}
        </div>

    )
}