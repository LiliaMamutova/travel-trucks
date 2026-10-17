import {CamperFilters} from "@/types/camper";
import {ChangeEvent, useState} from "react";
import css from "./Filters.module.css";
import {BsMap} from "react-icons/bs";
import {ENGINE_LABELS, FORM_LABELS, TRANSMISSION_LABELS} from "@/constants/filters";
import Button from "@/components/ui/Button/Button";
import {IoCloseOutline} from "react-icons/io5";

interface FiltersProps {
    onSearch: (filters: CamperFilters) => void;
}

export default function Filters ({onSearch}: FiltersProps) {
    const [draft, setDraft] = useState<CamperFilters>({});

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch({...draft, location: draft?.location?.trim() || undefined})
    }

    const handleChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
        setDraft({...draft, location: event.currentTarget.value})
    }

    const handleChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
        setDraft({...draft, form: event.currentTarget.value as CamperFilters["form"]})
    }

    const handleChangeEngine = (event: ChangeEvent<HTMLInputElement>) => {
        setDraft({...draft, engine: event.currentTarget.value as CamperFilters["engine"]})
    }

    const handleChangeTransmission = (event: ChangeEvent<HTMLInputElement>) => {
        setDraft({...draft, transmission: event.currentTarget.value as CamperFilters["transmission"]})
    }


    const handleClear = () => {
        setDraft({});
        onSearch({});
    }

    return (
        <form
            className={css.filters}
            onSubmit={handleSubmit}>
            <div className={css.info}>
                <label className={css.field}>
                    <span className={css.label}>
                        Location
                    </span>
                    <span className={css.location}>
                     <BsMap className={css.locationIcon} aria-hidden/>
                        <input
                        className={css.input}
                        type="text"
                        name="location"
                        placeholder="City"
                        value={draft.location ?? ""}
                        onChange={handleChangeLocation}
                        />
                    </span>
                </label>

                <div className={css.groups}>
                    <h2 className={css.title}>Filters</h2>
                    <fieldset className={css.group}>
                        <legend className={css.label}>Camper form</legend>
                        {Object.entries(FORM_LABELS).map(([value, label]) =>
                        <label
                            key={value}
                            className={css.option}>
                            <input
                                className={css.radio}
                                type="radio"
                                name="form"
                                value={value}
                                checked={draft.form === value}
                                onChange={handleChangeForm}
                            />
                            {label}
                        </label>
                        )}
                    </fieldset>
                    <fieldset className={css.group}>
                        <legend className={css.label}>Engine</legend>
                        {Object.entries(ENGINE_LABELS).map(([value, label]) =>
                            <label
                                key={value}
                                className={css.option}>
                                <input
                                    className={css.radio}
                                    type="radio"
                                    name="engine"
                                    value={value}
                                    checked={draft.engine === value}
                                    onChange={handleChangeEngine}
                                />
                                {label}
                            </label>
                        )}
                    </fieldset>
                    <fieldset className={css.group}>
                        <legend className={css.label}>Transmission</legend>
                        {Object.entries(TRANSMISSION_LABELS).map(([value, label]) =>
                            <label
                                key={value}
                                className={css.option}>
                                <input
                                    className={css.radio}
                                    type="radio"
                                    name="transmission"
                                    value={value}
                                    checked={draft.transmission === value}
                                    onChange={handleChangeTransmission}
                                />
                                {label}
                            </label>
                        )}
                    </fieldset>

                </div>
            </div>
            <div className={css.buttons}>
                <Button
                    className={css.button}
                    type="submit">
                    Search
                </Button>
                <Button
                    className={css.button}
                    variant="secondary"
                    onClick={handleClear}
                >
                    <IoCloseOutline size={24} aria-hidden />
                    Clear filters
                </Button>
            </div>
        </form>
    )
};