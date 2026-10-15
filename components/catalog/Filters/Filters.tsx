import {CamperFilters} from "@/types/camper";
import {useState} from "react";
import css from "./Filter.module.css";
import {BsMap} from "react-icons/bs";
import {ENGINE_LABELS, FORM_LABELS, TRANSMISSION_LABELS} from "@/constants/filters";
import Button from "@/components/ui/Button/Button";
import {IoCloseOutline} from "react-icons/io5";

interface FiltersProps {
    onSearch: (filters: CamperFilters) => void;
}

export const Filters = ({onSearch}: FiltersProps) => {
    const [draft, setDraft] = useState<CamperFilters>({});

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch({...draft, location: draft?.location?.trim() || undefined})
    }

    const handleChangeLocation = (event) => {
        setDraft({...draft, location: event.target.value})
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
                                checked={draft.form === value}
                                onChange={() => setDraft({...draft, form: value as CamperFilters["form"]})}
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
                                    checked={draft.engine === value}
                                    onChange={() => setDraft({...draft, engine: value as CamperFilters["engine"]})}
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
                                    checked={draft.transmission === value}
                                    onChange={() => setDraft({...draft, transmission: value as CamperFilters["transmission"]})}
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
                    onChange={handleClear}
                >
                    <IoCloseOutline size={24} aria-hidden />
                    Clear filters
                </Button>
            </div>
        </form>
    )
};