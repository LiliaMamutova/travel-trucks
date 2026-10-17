import css from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={css.backdrop}>
            <div className={css.modal} role="status" aria-live="polite">
                <span className={css.spinner} aria-hidden />
                <div className={css.text}>
                    <p className={css.title}>Loading tracks...</p>
                    <p className={css.description}>
                        Please wait while we fetch the best
                        <br />
                        travel trucks for you
                    </p>
                </div>
            </div>
        </div>
    );
};