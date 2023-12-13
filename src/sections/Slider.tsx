'use client';

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';

import LeftArrow2 from "@/components/Icons/LeftArrow2";
import RightArrow2 from "@/components/Icons/RightArrow2";
import Link from "next/link";

export default function SliderSection() {
    const [swipe, setSwipe]: any = useState(null);
    const navigationPrevRef: any = useRef(null);
    const navigationNextRef: any = useRef(null);

    const slides = [
        {
            image: 'https://dummyimage.com/600x600/f6f6f6/c2c2c2.jpg&amp;text=+magiaziemi+',
            link: '/shop/category/product',
        },
        {
            image: 'https://dummyimage.com/600x600/f6f6f6/c2c2c2.jpg&amp;text=+magiaziemi+',
            link: '/shop/category/product',
        },
        {
            image: 'https://dummyimage.com/600x600/f6f6f6/c2c2c2.jpg&amp;text=+magiaziemi+',
            link: '/shop/category/product',
        },
    ];

    return <div className="relative">
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="rounded-[17px]"
            observer={true}
            modules={[Navigation]}
            onBeforeInit={swiper => {
                setTimeout(() => {
                    navigationPrevRef.current.disabled = swiper.isBeginning ? "disabled" : false;
                    navigationNextRef.current.disabled = swiper.isEnd ? "disabled" : false;
                });
                setSwipe(swiper);
            }}
            onSlideChange={(swiper) => {
                navigationPrevRef.current.disabled = swiper.isBeginning ? "disabled" : false;
                navigationNextRef.current.disabled = swiper.isEnd ? "disabled" : false;
            }}
        >
            {slides.map((slide, index) => {
                return <SwiperSlide key={'slide_' + index} className="rounded-[17px] overflow-hidden">
                    <Link href={slide.link}>
                        <img alt='' width="100%" height="auto" src={slide.image} />
                    </Link>
                </SwiperSlide>
            })}
        </Swiper>
        <button
            className="absolute left-[-35px] top-[calc(50%-35px)] h-[70px] w-[70px] z-50 bg-white rounded-full flex justify-center items-center transition-all transform translate-x-0 disabled:-translate-x-20 duration-300 ease-in-out disabled:opacity-0"
            onClick={() => swipe?.slidePrev()}
            ref={navigationPrevRef}
        >
            <LeftArrow2 />
        </button>
        <button
            className="absolute right-[-35px] top-[calc(50%-35px)] h-[70px] w-[70px] z-50 bg-white rounded-full flex justify-center items-center transition-all transform translate-x-0 disabled:translate-x-20 duration-300 ease-in-out disabled:opacity-0"
            onClick={() => swipe?.slideNext()}
            ref={navigationNextRef}
        >
            <RightArrow2 />
        </button>
    </div>
};