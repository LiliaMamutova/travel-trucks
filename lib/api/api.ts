import axios, {AxiosInstance} from "axios";
import {Camper, CamperEngine, CamperForm, CampersResponse, CamperTransmission, Review} from "@/types/camper";

export const api: AxiosInstance = axios.create({
    baseURL: "https://campers-api.goit.study",
});

export interface FetchCampersParams {
    page: number;
    perPage: number;
    location?: string;
    form?: CamperForm;
    engine?: CamperEngine;
    transmission?: CamperTransmission;
}

export interface BookingRequest {
    name: string;
    email: string;
}

export interface BookingResponse {
    message: string;
}

export const getCampers = async (params: FetchCampersParams): Promise<CampersResponse> => {
    const { data } = await api.get<CampersResponse>("/campers", { params });
    return data;
}

export const getCamperById = async (id: string): Promise<Camper> => {
    const { data } = await api.get<Camper>(`/campers/${id}`);
    return data;
}

export const getReviews = async (id: string): Promise<Review[]> => {
    const { data } = await api.get<Review[]>(`/campers/${id}/reviews`);
    return data;

}

export const createBooking = async (camperId: string, body: BookingRequest): Promise<BookingResponse>  => {
    const { data } = await api.post<BookingResponse>(`/campers/${camperId}/booking-requests`, body);
    return data;
}

