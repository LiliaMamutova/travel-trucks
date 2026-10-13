import clsx from "clsx";
import NextLink from "next/link";
import { ComponentProps } from "react";
import css from "./Link.module.css";

type LinkProps = ComponentProps<typeof NextLink> & {
    variant?: "primary" | "nav";
    active?: boolean;
};

export default function Link({ children, className, variant = "nav", active = false, ...props }: LinkProps): React.ReactNode {
    const variantClass = css[`link--variant-${variant}`];

    return (
        <NextLink
            {...props}
            className={clsx(css.link, variantClass, active && css["link--active"], className)}
            aria-current={active ? "page" : undefined}
        >
            {children}
        </NextLink>
    );
}

