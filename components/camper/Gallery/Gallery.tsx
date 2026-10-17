"use client";

import {GalleryImage} from "@/types/camper";
import {useState} from "react";
import { Swiper as SwiperType } from "swiper"
import css from "./Gallery.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Thumbs} from "swiper/modules";
import Image from "next/image";


interface GalleryProps {
    images: GalleryImage[];
    name: string;
}

export default function Gallery({ images, name } : GalleryProps) {
    const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperType | null>(null);

    return (
        <div className={css.gallery}>
            <Swiper modules={[Thumbs]} thumbs={{swiper: thumbsSwiper}} className={css.main}>
                {images.map((image) =>
                <SwiperSlide key={image.id}>
                    <Image src={image.original} alt={name} fill sizes="638" className={css.image} />
                </SwiperSlide>)}
            </Swiper>
            <Swiper modules={[Thumbs]} onSwiper={setThumbsSwiper} slidesPerView={4} spaceBetween={32}>
                {images.map((image) => (
                    <SwiperSlide key={image.id} className={css.thumb}>
                        <Image src={image.thumb} alt={name} fill sizes="136px" className={css.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
