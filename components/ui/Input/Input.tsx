"use client";

import React, { useState } from "react";
import clsx from "clsx";
import css from "./Input.module.css";
import Icon from "@/components/ui/Icon/Icon";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    errorMessage?: string;
};

export default function Input({ onBlur, onInput, onInvalid, className, placeholder, errorMessage, ...props }: InputProps): React.ReactNode {
    const [validationError, setValidationError] = useState<string>("");

    function validate(input: HTMLInputElement) {
        setValidationError(input.validity.valid ? "" : errorMessage || input.validationMessage);
    }

    function handleBlur(ev: React.FocusEvent<HTMLInputElement>) {
        validate(ev.currentTarget);
        if (onBlur) onBlur(ev);
    }

    function handleInput(event: React.InputEvent<HTMLInputElement>) {
        if (validationError) validate(event.currentTarget);
        if (onInput) {
            onInput(event);
        }
    }

    function handleInvalid(event: React.SyntheticEvent<HTMLInputElement>) {
        event.preventDefault();
        validate(event.currentTarget);
        if (onInvalid) onInvalid(event);
    }

    return (
        <div className={clsx(css["wrapper"], validationError && css["error"], className)}>
            <div className={css["field"]}>
                <input
                    {...props}
                    placeholder={placeholder}
                    className={css["input"]}
                    aria-invalid={Boolean(validationError)}
                    onBlur={handleBlur}
                    onInput={handleInput}
                    onInvalid={handleInvalid}
                />
                {validationError && (
                    <>
                        {placeholder && <span className={css["label"]}>{placeholder}</span>}
                        <Icon name="warning" className={css["icon"]} aria-hidden />
                    </>
                )}
            </div>
            {validationError && <p className={css["validity"]}>{validationError}</p>}
        </div>
    );
};
