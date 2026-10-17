import {Camper} from "@/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";
import {FaStar} from "react-icons/fa";
import {BsMap} from "react-icons/bs";
import RadioButton from "@/components/ui/RadioButton/RadioButton";
import {ENGINE_ICONS, FORM_ICONS, TRANSMISSION_ICONS} from "@/constants/icons";
import {ENGINE_LABELS, FORM_LABELS, TRANSMISSION_LABELS} from "@/constants/filters";
import Link from "@/components/ui/Link/Link";
import {formatLocation} from "@/utils/format";

interface CamperCardProps {
    camper: Camper;

}

export default function CamperCard ({ camper }: CamperCardProps) {
    const { id, name, price, rating, totalReviews, location, description, coverImage, engine, transmission, form } = camper;

    return (
        <article className={css.card}>
            <Image
                src={coverImage}
                alt={name}
                width={219}
                height={240}
                className={css.image}/>
            <div className={css.info}>
                <div className={css.text}>
                    <div className={css.header}>
                        <h2 className={css.title}>{name}</h2>
                        <p className={css.price}>€{price}</p>
                    </div>
                    <div>
                        <p className={css.star} aria-hidden>
                            <FaStar className={css.star} aria-hidden />
                            {rating}({totalReviews} Reviews)
                        </p>
                        <p className={css.detail}>
                            <BsMap aria-hidden/>
                            {formatLocation(location)}
                        </p>
                    </div>
                </div>
                <p className={css.description}>{description}</p>

                <ul className={css.radioBtn}>
                    <li><RadioButton icon={FORM_ICONS[form]}>{FORM_LABELS[form]}</RadioButton></li>
                    <li><RadioButton icon={ENGINE_ICONS[engine]}>{ENGINE_LABELS[engine]}</RadioButton></li>
                    <li><RadioButton icon={TRANSMISSION_ICONS[transmission]}>{TRANSMISSION_LABELS[transmission]}</RadioButton></li>
                </ul>
                <Link href={`/catalog/${id}`} variant="primary" target="_blank" rel="noopener noreferrer">
                Show more
            </Link>
            </div>

        </article>
    )
}