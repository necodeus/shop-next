
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SlideSelect() {
    const options = [
        { Icon: '/google.svg',   name: 'Google',   url: '/api/sign-in/with-google'   },
        { Icon: '/facebook.svg', name: 'Facebook', url: '/api/sign-in/with-facebook' },
        { Icon: '/spotify.svg',  name: 'Spotify',  url: '/api/sign-in/with-spotify'  },
        { Icon: '/steam.svg',    name: 'Steam',    url: '/api/sign-in/with-steam'    },
        { Icon: '/linkedin.svg', name: 'LinkedIn', url: '/api/sign-in/with-linkedin' },
    ];

    const selected = 0;

    return <div className="relative">
        <div className="bg-white rounded-[28px] border-2 border-[#eee] w-full h-full top-0 absolute m-0"></div>
        <div className="relative flex pt-4 pb-3 px-[6px]">
            <div className="w-[60px] flex justify-center items-center">
                <div className="absolute w-[32px] h-[32px]" style={{ opacity: 1 }}><img alt="" width="32" height="32px" src={options[selected].Icon} /></div>
            </div>
            <div className="text-[#3b3b3b] relative grow flex items-center">
                <div className="text-[15px] font-normal">
                    Autoryzacja przez<br/>
                    <span className="text-[15px] font-medium">{ options[selected].name }</span>
                </div>
            </div>
        </div>
        <div className="relative w-[calc(100%-20px*2)] h-[1px] bg-[#eee] p-0 mx-5"></div>
        <div className="relative mx-[16px] pb-5 pt-4">
            <Swiper slidesPerView={4}>
                {options.map((item, index) => {
                    return <SwiperSlide className="flex cursor-pointer" key={index}>
                        <div className="py-0 px-[20px]" style={{opacity: 1}}>
                            <img alt="" width="32" height="32px" src={item.Icon} />
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </div>
};
