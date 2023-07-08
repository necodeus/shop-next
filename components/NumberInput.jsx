import {
    Plus as PlusIcon,
    Minus as MinusIcon,
} from 'react-feather';

export default function NumberInput({
    placeholder = '',
    value = '',
    onIncrease = () => {},
    onDecrease = () => {},
    onChange = () => {},
}) {
    return <div className="flex items-center relative h-[50px]">
        <div className="bg-white rounded-[999px] border-2 border-[#eee] w-full h-full absolute z-50 m-0"></div>
        <button
            onClick={onIncrease}
            className="bg-[#6ff58d] text-white rounded-[999px] font-medium text-[14px] m-[6px] h-[calc(100%-6px*2)] z-50 w-[38px] p-0 flex justify-center items-center"
        >
            <PlusIcon color="white" size="20px" className="cursor-pointer" />
        </button>
        <input
            className="bg-transparent grow outline-none h-full z-50 w-[40px] text-center"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        <button
            onClick={onDecrease}
            className="bg-[#6ff58d] text-white rounded-[999px] font-medium text-[14px] m-[6px] h-[calc(100%-6px*2)] z-50 w-[38px] p-0 flex justify-center items-center"
        >
            <MinusIcon color="white" size="20px" className="cursor-pointer" />
        </button>
    </div>
};