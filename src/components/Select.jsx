import { ChevronDown, Archive } from 'react-feather';

export default function Select() {
    return <div className="flex items-center relative h-[60px]">
        <div className="bg-white rounded-[999px] border-2 border-[#eee] w-full h-full absolute z-50 m-0"></div>
        <div className="rounded-[999px] m-[6px] h-[calc(100%-6px*2)] z-[9999] w-[48px] p-0 flex justify-center items-center">
            <Archive color="rgb(59, 59, 59)" size="23px" />
        </div>
        <div className="z-[9999] grow text-[#3b3b3b]">
            <div className="text-[13px] font-normal">Dostawa kurierem</div>
            <div className="text-[13px] font-medium">InPost do punktu (10 PLN)</div>
        </div>
        <button className="bg-[#6ff58d] text-white rounded-[999px] font-medium text-[14px] m-[6px] h-[calc(100%-6px*2)] z-50 w-[48px] p-0 flex justify-center items-center">
            <ChevronDown color="white" size="23px" className="cursor-pointer" />
        </button>
    </div>
};
