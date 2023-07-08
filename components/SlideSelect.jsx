
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTransition, animated } from 'react-spring';

export default function SlideSelect({ options, selected, onClick }) {
    const transitions = useTransition(selected, {
        from:    { opacity: 0, transform: 'translateY(50%)', },
        enter:   { opacity: 1, transform: 'translateY(0%)', },
        leave:   { opacity: 0, transform: 'translateY(-50%)', },
        reverse: selected,
        config:  { mass: 1.5, tension: 1000, friction: 100 },
    });

    return <div className="relative">
        <div className="bg-white rounded-[28px] border-2 border-[#eee] w-full h-full top-0 absolute m-0"></div>
        <div className="relative flex pt-4 pb-3 px-[6px]">
            <div className="w-[60px] flex justify-center items-center">
                {transitions(({ opacity, transform }, item) => (item !== 'undefined') && <animated.div className="absolute w-[32px] h-[32px]" style={{ transform, opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }) }}><img alt="" width="32" height="32px" src={options[selected].Icon} /></animated.div>)}
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
                    return <SwiperSlide className="flex cursor-pointer" onClick={() => onClick(index)} key={index}>
                        <div className="py-0 px-[20px]" style={{opacity: selected === index ? '1' : '0.5'}}>
                            <img alt="" width="32" height="32px" src={item.Icon} />
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </div>
};
