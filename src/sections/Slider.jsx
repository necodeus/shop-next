'use client';

import LeftArrow2 from "../components/Icons/LeftArrow2";
import RightArrow2 from "../components/Icons/RightArrow2";
import Link from "next/link";

import { useRef, useEffect  } from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function Slider() {
  const swiperElRef = useRef(null);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('swiperbeforeinit', (e) => {
      navigationPrevRef.current.slider.disabled = e.isBeginning ? "disabled" : false;
      navigationNextRef.current.slider.disabled = e.isEnd ? "disabled" : false;
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      navigationPrevRef.current.disabled = e.target.swiper.isBeginning ? "disabled" : false;
      navigationNextRef.current.disabled = e.target.swiper.isEnd ? "disabled" : false;
    });
  }, []);

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

  return (
    <div className="relative">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        space-between={20}
        className="rounded-[17px]"
      >
          {slides.map((slide, index) => {
              return <swiper-slide key={'slide_' + index} className="rounded-[17px] overflow-hidden" lazy="true">
                  <Link href={ slide.link }>
                    <img alt='' width="100%" height="auto" src={ slide.image } loading="lazy" />
                  </Link>
              </swiper-slide>
          })}
      </swiper-container>
      <button
          className="absolute left-[-35px] top-[calc(50%-35px)] h-[70px] w-[70px] z-50 bg-white rounded-full flex justify-center items-center transition-all transform translate-x-0 disabled:-translate-x-20 duration-300 ease-in-out disabled:opacity-0"
          onClick={(e) => {
            swiperElRef.current.swiper.slidePrev();
          }}
          ref={navigationPrevRef}
      >
          <LeftArrow2 />
      </button>
      <button
          className="absolute right-[-35px] top-[calc(50%-35px)] h-[70px] w-[70px] z-50 bg-white rounded-full flex justify-center items-center transition-all transform translate-x-0 disabled:translate-x-20 duration-300 ease-in-out disabled:opacity-0"
          onClick={(e) => {
            swiperElRef.current.swiper.slideNext();
          }}
          ref={navigationNextRef}
      >
          <RightArrow2 />
      </button>
    </div>
  );
};
