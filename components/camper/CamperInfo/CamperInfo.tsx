import {CamperDetails} from "@/types/camper";
import css from "./CamperInfo.module.css"
import {FaStar} from "react-icons/fa";
import {BsMap} from "react-icons/bs";
import {formatLocation} from "@/utils/format";


interface CamperInfoProps {
     camper: CamperDetails;
}

export default function CamperInfo({camper}: CamperInfoProps) {
    const { name, rating, totalReviews, location, price, description } = camper;

    return (
        <div className={css.card}>
            <div className={css.header}>
                <h1 className={css.title}>{name}</h1>
                <div className={css.details}>
                    <div className={css.meta}>
                        <p className={css.detail}>
                            <FaStar className={css.star} aria-hidden />
                            {rating}({totalReviews} Reviews)
                        </p>
                        <p className={css.detail}>
                            <BsMap aria-hidden />
                            {formatLocation(location)}
                        </p>
                    </div>
                    <p className={css.price}>€{price}</p>
                </div>
            </div>
            <p className={css.description}>{description}</p>
        </div>
    );
};