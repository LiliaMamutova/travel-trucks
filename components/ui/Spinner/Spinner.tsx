import { SpinnerDotted } from "spinners-react";

interface SpinnerProps {
    size?: number;
    color?: string;
}

export default function Spinner({
                                    size = 48,
                                    color = "var(--button-primary-hover)",
                                }: SpinnerProps): React.ReactNode {
    return <SpinnerDotted color={color} size={size} />;
}
