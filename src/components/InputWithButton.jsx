export default function InputWithButton({
    placeholder = '',
    value = '',
    onChange = () => {},
    onClick = () => {},
}) {
    return <div>
        <div className="flex items-center relative h-[60px]">
            <div className="bg-white rounded-[999px] border-2 border-[#eee] w-full h-full absolute z-50 m-0"></div>
            <input
                className="bg-transparent grow outline-none h-full z-50 ml-[16px]"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button
                className="bg-[#6ff58d] text-white rounded-[999px] font-medium text-[14px] pl-[18px] pr-[18px] m-[6px] h-[calc(100%-6px*2)] z-50"
                onClick={onClick}
            >Aktywuj</button>
        </div>
    </div>
};