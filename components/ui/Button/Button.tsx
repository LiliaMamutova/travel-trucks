import clsx from "clsx";
import css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export default function Button({ children, className, variant = "primary", type = "button", ...props }: ButtonProps): React.ReactNode {
    const variantClass = css[`button--variant-${variant}`];

    return (
        <button {...props} type={type} className={clsx(css.button, variantClass, className)}>
            {children}
        </button>
    );
};
