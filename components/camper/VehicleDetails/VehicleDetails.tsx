import {CamperDetails} from "@/types/camper";
import {AMENITY_LABELS, ENGINE_LABELS, FORM_LABELS, TRANSMISSION_LABELS} from "@/constants/filters";
import {formatMeasure} from "@/utils/format";
import css from "./VehicleDetails.module.css";
import RadioButton from "@/components/ui/RadioButton/RadioButton";


interface VehicleDetailsProps {
    camper: CamperDetails;
}

export default function VehicleDetails({camper}: VehicleDetailsProps) {
    const {transmission, amenities, engine, form, length, width, height, tank, consumption} = camper;

    const list = [
        TRANSMISSION_LABELS[transmission],
        ...amenities.map((amenity) => AMENITY_LABELS[amenity]),
        ENGINE_LABELS[engine],
        FORM_LABELS[form],
    ];

    const charts = [
        { label: "Form", value: FORM_LABELS[form] },
        { label: "Length", value: formatMeasure(length) },
        { label: "Width", value: formatMeasure(width) },
        { label: "Height", value: formatMeasure(height) },
        { label: "Tank", value: formatMeasure(tank) },
        { label: "Consumption", value: formatMeasure(consumption) },
    ];

    return (
        <div className={css.card}>
            <h2 className={css.title}>Vehicle details</h2>

            <ul className={css.list}>
                {list.map((item) => (
                    <li key={item}>
                        <RadioButton>{item}</RadioButton>
                    </li>
                    ))}
            </ul>

            <dl className={css.charts}>
                {charts.map(({ label, value }) => (
                    <div key={label} className={css.row}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};
