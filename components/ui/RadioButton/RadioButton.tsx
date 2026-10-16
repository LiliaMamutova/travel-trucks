import css from "./RadioButton.module.css";
import {IconType} from "react-icons";

interface RadioButtonProps {
    icon: IconType;
    children: React.ReactNode;
}

export default function RadioButton({ icon: Icon, children }: RadioButtonProps) {
    return (
        <span className={css.radioBtn}>
            <Icon className={css.icon} />
            {children}
        </span>
    );
}