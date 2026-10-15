import Spinner from "@/components/ui/Spinner/Spinner";
import css from "./loading.module.css";
import clsx from "clsx";


export default function Loading() {
    return (
        <div className={clsx("container", css.wrapper)}>
            <p className={css.loading}>Loading, please wait...</p>
            <Spinner />
        </div>
    );
}

