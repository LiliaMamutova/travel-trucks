import {Review} from "@/types/camper";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";
import css from "./Reviews.module.css";


interface ReviewsProps {
    reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <ul className={css.list}>
            {reviews.map(({id, reviewer_name, reviewer_rating, comment}) => (
                <li key={id} className={css.review}>
                    <div className={css.person}>
                        <span className={css.avatar} aria-hidden>
                            {reviewer_name.charAt(0).toUpperCase()}
                        </span>
                        <div className={css.name}>
                            <p className={css.author}>{reviewer_name}</p>
                            <div className={css.stars} aria-hidden>
                                {stars.map((star) => (
                                    <FaStar key={star}
                                            className={clsx(css.star, star <= reviewer_rating && css.filled)}
                                            aria-hidden
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className={css.comment}>{comment}</p>
                </li>
            ))}
        </ul>
    );
};