"use client";

import css from "./BookingForm.module.css"
import Input from "@/components/ui/Input/Input";
import {useMutation} from "@tanstack/react-query";
import Button from "@/components/ui/Button/Button";
import {BookingRequest, createBooking} from "@/lib/api/api";
import toast from "react-hot-toast";


interface BookingFormProps {
    camperId: string;
}


export default function BookingForm({camperId}: BookingFormProps) {
    const mutation = useMutation({
        mutationFn: (body: BookingRequest) => createBooking(camperId, body),
    });

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const booking: BookingRequest = {
            name: String(formData.get("name")).trim(),
            email: String(formData.get("email")).trim(),
        };

        try {
            const response = await mutation.mutateAsync(booking);
            toast.success(response.message);
            form.reset();
        } catch {
            toast.error("Something went wrong. Please try again.");
        }
    }

    return (
        <div>
            <form className={css.form}
                  onSubmit={handleSubmit}>
                <div className={css.header}>
                    <h2 className={css.title}>Book your campervan now</h2>
                    <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
                </div>
                <div className={css.content}>
                    <div className={css.inputs}>
                        <Input
                            name="name"
                            type="text"
                            placeholder="Name*"
                            required
                            pattern="[\p{L}' \-]+"
                            errorMessage="Please enter your name."
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email*"
                            required
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            errorMessage="Please enter your email."
                        />
                    </div>
                    <Button
                        type="submit"
                        className={css.button}
                        disabled={mutation.isPending}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}