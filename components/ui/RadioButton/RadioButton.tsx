import css from "./RadioButton.module.css";
import {IconType} from "react-icons";

interface RadioButtonProps {
    icon?: IconType;
    children: React.ReactNode;
}

export default function RadioButton({ icon: Icon, children }: RadioButtonProps) {
    return (
        <span className={css.radioBtn}>
            {Icon && <Icon className={css.icon} aria-hidden />}
            {children}
        </span>
    );
};