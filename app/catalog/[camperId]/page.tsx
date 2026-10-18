import {getCamperById, getReviews} from "@/lib/api/api";
import {Metadata} from "next";
import css from "./page.module.css";
import Gallery from "@/components/camper/Gallery/Gallery";
import CamperInfo from "@/components/camper/CamperInfo/CamperInfo";
import VehicleDetails from "@/components/camper/VehicleDetails/VehicleDetails";
import BookingForm from "@/components/camper/BookingForm/BookingForm";
import Reviews from "@/components/camper/Reviews/Reviews";
import {notFound} from "next/navigation";

interface CamperPageProps {
    params: Promise<{ camperId: string }>
}

async function loadCamper(camperId: string) {
    try {
        return await getCamperById(camperId);
    } catch {
        notFound();
    }
}

export async function generateMetadata({ params }: CamperPageProps): Promise<Metadata> {
    const { camperId } = await params;
    const camper = await loadCamper(camperId);

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
    const [ camper, reviews ] = await Promise.all([loadCamper(camperId), getReviews(camperId)])

    return (
        <div className={css.page}>
            <div className="container">
                <section className={css.top}>
                    <Gallery images={camper.gallery} name={camper.name} />

                    <div className={css.info}>
                        <CamperInfo camper={camper} />
                        <VehicleDetails camper={camper} />
                    </div>
                </section>

                <section className={css.bottom}>
                    <h2 className={css.title}>Reviews</h2>

                    <div className={css.columns}>
                        <div className={css.reviews}>
                            <Reviews reviews={reviews} />
                        </div>
                        <BookingForm camperId={camperId} />
                    </div>
                </section>
            </div>
        </div>
    );
};