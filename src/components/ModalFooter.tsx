import ButtonGreen from './ButtonGreen';

export default function ModalFooter({ buttonText, children }: any) {
    return <div className="flex justify-between px-[19px] py-[19px] bg-[#eee]">
        {children}
        <div className="flex items-center grow">
            <ButtonGreen>{buttonText}</ButtonGreen>
        </div>
    </div>
};
