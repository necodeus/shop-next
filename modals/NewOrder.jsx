import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import { previous, next, close, calculateOrder, createOrder } from '../features/newOrder';
import { addOrderProduct, setOrderProduct, removeOrderProduct, setOrderCoupon, removeOrderCoupon } from '../store/localData';
import { getProducts } from '../store/shopData';

import Select from '../components/Select';
import InputWithButton from '../components/InputWithButton';

import ModalHeader from '../components/ModalHeader';
import Logo from '../components/Logo';
import ModalProgress from '../components/ModalProgress';
import ModalItem from '../components/ModalItem';
import ModalFooter from '../components/ModalFooter';
import ButtonGreen from '../components/ButtonGreen';
import ModalItem2 from '../components/ModalItem2';

export default function NewOrderModal() {
    const dispatch = useDispatch();

    const { step, isOpen } = useSelector((state) => state.orderModal);
    const { products } = useSelector((state) => state.shopData);
    const { orderProducts, orderCoupons } = useSelector((state) => state.localData);

    const [ couponVal, setCouponVal ] = useState('');

    const transitions = useTransition(isOpen, {
        from: { opacity: 0, transform: "translateY(-100%)" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0, transform: "translateY(-100%)" },
        reverse: isOpen,
        config: { mass: 1.5, tension: 1000, friction: 100 },
    });

    // useEffect(() => {
    //     alert(1);
    // }, step, isOpen);

    return transitions(({ opacity, transform }, item) => item && (
        <animated.div
            className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-start text-[#3b3b3b] overflow-y-auto z-50"
            style={{opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] })}}
        >
            <div className="fixed w-full h-full bg-white opacity-90" onClick={ () => dispatch(close()) }></div>
            <animated.div className="mt-[90px] mb-[45px] flex flex-col relative justify-center items-center" style={{ transform }}>
                <Logo linkClasses="w-[90px] h-[90px] pt-[calc(-90px/2-19px)] absolute top-[-45px] z-50" />
                <div className="relative border-2 border-solid border-[#eee] rounded-[14px] bg-white overflow-hidden w-[450px]">
                    <div className="px-[19px] pt-[19px]">
                        <ModalHeader
                            handleBack={ step ? () => dispatch(previous()) : undefined }
                            handleClose={ () => dispatch(close()) }
                        />
                    </div>

                    <div className="px-[19px] py-[19px]">
                        <ModalProgress stages={[ 'Koszyk', 'Dostawa', 'Płatność' ]} activeStage={step + 1} />
                    </div>

                    {step === 0 && <>
                        {orderProducts.map((item, index) => {
                            let product = products.find(product => product.id === item.id);

                            return product && <div className="px-[19px] pb-[19px]"><ModalItem
                                key={index}
                                name={product.name}
                                description={product.gross_price + ' PLN'}
                                quantity={item.quantity}
                                onIncrease={() => dispatch(addOrderProduct({ id: item.id }))}
                                onDecrease={() => dispatch(removeOrderProduct({ id: item.id }))}
                                onChange={(e) => dispatch(setOrderProduct({ id: item.id, quantity: e.target.value }))}
                            /></div>
                        })}
                        
                        {orderCoupons.map((item, index) => <div key={index} className="px-[19px] pb-[19px]"><ModalItem2
                            name={item}
                            onIncrease={() => {}}
                            onDecrease={() => dispatch(removeOrderCoupon(item))}
                        /></div>)}

                        <div className="px-[19px] pb-[19px]">
                        <InputWithButton
                            placeholder="Wprowadź kod rabatowy"
                            value={couponVal}
                            onChange={(e) => setCouponVal(e.target.value)}
                            onClick={(e) => dispatch(setOrderCoupon(couponVal))}
                        />
                        </div>
                    </>}
                    
                    {step === 1 && <>
                        <div className="bg-white px-[19px] pb-[19px]"><Select /></div>
                        <div className="bg-white px-[19px] pb-[19px]"><Select /></div>
                        <div className="bg-white px-[19px] pb-[19px]"><Select /></div>
                    </>}

                    {step === 2 && <>
                        <div className="bg-white px-[19px] pb-[19px]"><Select /></div>
                        <div className="bg-white px-[19px] pb-[19px]"><Select /></div>
                        <div className="bg-white px-[19px] pb-[19px]"><Select /></div>
                    </>}

                    <div className="flex justify-between px-[19px] py-[19px] bg-[#eee]">
                        <div className="flex grow flex-col justify-between">
                            <div>Wartość zamówienia</div>
                            <div className="font-medium text-[22px]">224 775 PLN</div>
                        </div>
                        <div className="flex items-center grow">
                            <ButtonGreen handleClick={() => (step < 2 ? dispatch(next()) : dispatch(createOrder(orderProducts)))}>{ step >= 2 ? "Zamów" : "Dalej" }</ButtonGreen>
                        </div>
                    </div>
                </div>
            </animated.div>
        </animated.div>
    ));
};
