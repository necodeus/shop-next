export default function ButtonGreen({ children, handleClick }) {
    return <button
        onClick={handleClick}
        className="bg-[#6ff58d] text-white rounded-[999px] font-medium h-[60px] text-[20px] pl-[34px] pr-[34px] w-full"
    >{ children }</button>;
};
