import css from "./NoCampers.module.css";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import {IoCloseOutline} from "react-icons/io5";

interface NoCampersProps {
    onReset: () => void;
}

export const NoCampers = ({ onReset }: NoCampersProps) => {
    return (
        <div className={css.wrapper}>
            <Image
                src="/no-travel-trucks.webp"
                alt=""
                width={488}
                height={463}
                className={css.image}/>
            <div className={css.text}>
                <h2 className={css.title}>No campers found</h2>
                <p className={css.description}>We couldn`t find any campers that match your filters.
                    <br/>
                    Try adjusting your search or clearing some filters.</p>
            </div>
            <div className={css.buttons}>
                <Button
                    variant="secondary"
                    onClick={onReset}
                    className={css.button}
                >
                    <IoCloseOutline size={24} aria-hidden/>
                    Clear filters
                </Button>
                <Button
                    variant="primary"
                    onClick={onReset}
                    className={css.button}
                > View all campers
                </Button>
            </div>
        </div>
    )
}