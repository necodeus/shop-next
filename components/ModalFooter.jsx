import ButtonGreen from './ButtonGreen';

export default function ModalFooter({ buttonHandle, buttonText, children }) {
    return <div className="flex justify-between px-[19px] py-[19px] bg-[#eee]">
        {children}
        <div className="flex items-center grow">
            <ButtonGreen handleClick={buttonHandle}>{buttonText}</ButtonGreen>
        </div>
    </div>
};
