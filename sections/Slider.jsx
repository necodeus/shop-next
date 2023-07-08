import { useRef, useState } from "react";

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import LeftArrow2 from "../components/Icons/LeftArrow2";
import RightArrow2 from "../components/Icons/RightArrow2";
import Link from "next/link";

export default function SliderSection({ slides }) {
    const [swipe, setSwipe] = useState(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return <div className="relative">
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="rounded-[17px]"
            observer={true}
            modules={ Navigation }
            navigation={swiper => {
                swiper.prevEl = navigationPrevRef.current;
                swiper.nextEl = navigationNextRef.current;
            }}
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
                    <Link href={ slide.link }>
                        <a>
                            <img alt='' width="100%" height="auto" src={ slide.image } />
                        </a>
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
