export type CamperForm = "alcove" | "panel_van" | "integrated" | "semi_integrated";
export type CamperEngine = "diesel" | "petrol" | "hybrid" | "electric";
export type CamperTransmission = "automatic" | "manual";
export type CamperAmenity =
    | "ac"
    | "bathroom"
    | "kitchen"
    | "tv"
    | "radio"
    | "refrigerator"
    | "microwave"
    | "gas"
    | "water";

export interface Camper {
    id: string;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    form: CamperForm;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: CamperTransmission;
    engine: CamperEngine;
    amenities: CamperAmenity[];
    coverImage: string;
    totalReviews: number;
    createdAt: string;
    updatedAt: string;
}

export interface CampersResponse {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    campers: Camper[];
}

export interface Review {
    id: string;
    camperId: string;
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
    createdAt: string;
}

export interface CampersResponse {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    campers: Camper[];
}

export interface CamperFilters {
    location?: string;
    form?: CamperForm;
    engine?: CamperEngine;
    transmission?: CamperTransmission;
}

export interface GalleryImage {
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
}

export interface CamperDetails extends Omit<Camper, "coverImage"> {
    gallery: GalleryImage[];
}