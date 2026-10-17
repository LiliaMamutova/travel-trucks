export type IconName = "logo"
    | "petrol"
    | "automatic"
    | "alcove"
    | "warning";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    width?: number;
    height?: number;
}

export default function Icon({name, width = 24, height = width, className, ...props}: IconProps) {
    return (
        <svg width={width} height={height} className={className} {...props}>
            <use href={`/icons/sprite.svg#${name}`}></use>
        </svg>
    );
};