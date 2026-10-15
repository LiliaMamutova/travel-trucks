"use client";

import { usePathname } from "next/navigation";
import Link from "@/components/ui/Link/Link";
import css from "./Header.module.css";
import Icon from "@/components/ui/Icon/Icon";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
];

export default function Header(): React.ReactNode {
    const pathname = usePathname();

    const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <header className={css.header}>
            <div className={`container ${css.inner}`}>
                <Link href="/" className={css.logo} aria-label="TravelTrucks home">
                    <Icon name={"logo"} width={136} height={16}/>
                </Link>

                <nav aria-label="Main navigation">
                    <ul className={css.list}>
                        {navItems.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} variant="nav" active={isActive(href)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
