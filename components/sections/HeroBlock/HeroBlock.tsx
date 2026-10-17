import css from "./HeroBlock.module.css";
import Image from "next/image";
import Link from "@/components/ui/Link/Link";


export default function HeroBlock () {
    return (
        <section className={css.hero}>
            <Image
                src="/travel-trucks.webp"
                alt=""
                fill
                loading="eager"
                sizes="100vw"
                className={css.backgroundImage}
            />
            <div className="container">
                <div className={css.content}>
                    <h1 className={css.title}>
                        Campers of your dreams
                    </h1>

                    <p className={css.description}>
                        You can find everything you want in our catalog
                    </p>
                        <Link href="/catalog" variant="primary" className={css.btn}>View Now</Link>
                </div>
            </div>
        </section>
    );
};