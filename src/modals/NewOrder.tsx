import Select from '@/components/Select';
import InputWithButton from '@/components/InputWithButton';
import ModalHeader from '@/components/ModalHeader';
import Logo from '@/components/Logo';
import ModalProgress from '@/components/ModalProgress';
import ModalItem from '@/components/ModalItem';
import ButtonGreen from '@/components/ButtonGreen';
import ModalItem2 from '@/components/ModalItem2';

export default function NewOrderModal() {
    const step: number = 0;

    return <div
        className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-start text-[#3b3b3b] overflow-y-auto z-50"
        style={{ opacity: 1 }}
    >
        <div className="fixed w-full h-full bg-white opacity-90"></div>
        <div className="mt-[90px] mb-[45px] flex flex-col relative justify-center items-center">
            <Logo linkClasses="w-[90px] h-[90px] pt-[calc(-90px/2-19px)] absolute top-[-45px] z-50" />
            <div className="relative border-2 border-solid border-[#eee] rounded-[14px] bg-white overflow-hidden w-[450px]">
                <div className="px-[19px] pt-[19px]">
                    <ModalHeader />
                </div>

                <div className="px-[19px] py-[19px]">
                    <ModalProgress stages={['Koszyk', 'Dostawa', 'Płatność']} />
                </div>

                {step === 0 && <>
                    <div className="px-[19px] pb-[19px]">
                        <ModalItem
                            name="Koszyk"
                            description={100 + ' PLN'}
                            quantity={1}
                        />
                    </div>

                    <div className="px-[19px] pb-[19px]">
                        <ModalItem2 name="Koszyk" />
                    </div>

                    <div className="px-[19px] pb-[19px]">
                        <InputWithButton
                            placeholder="Wprowadź kod rabatowy"
                            value="XYZ123"
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
                        <ButtonGreen>Zamów</ButtonGreen>
                    </div>
                </div>
            </div>
        </div>
    </div>
};
