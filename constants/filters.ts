import {CamperEngine, CamperForm, CamperTransmission, CamperAmenity} from "@/types/camper";

export const FORM_LABELS: Record<CamperForm, string> = {
    alcove: "Alcove",
    panel_van: "Panel Van",
    integrated: "Integrated",
    semi_integrated: "Semi Integrated",
};

export const ENGINE_LABELS: Record<CamperEngine, string> = {
    diesel: "Diesel",
    petrol: "Petrol",
    hybrid: "Hybrid",
    electric: "Electric",
};

export const TRANSMISSION_LABELS: Record<CamperTransmission, string> = {
    automatic: "Automatic",
    manual: "Manual",
};

export const AMENITY_LABELS: Record<CamperAmenity, string> = {
    ac: "AC",
    bathroom: "Bathroom",
    kitchen: "Kitchen",
    tv: "TV",
    radio: "Radio",
    refrigerator: "Refrigerator",
    microwave: "Microwave",
    gas: "Gas",
    water: "Water",
};