import Heading from "@/components/Heading";
import CheckboxEnabledIcon from "@/components/Icons/CheckboxEnabledIcon";

export default function CategoryFilterSection() {
    return <div className="max-w-[1000px] mx-auto px-5 my-[35px] text-mineshaft font-jost">
        <div className="p-5 bg-wildsand rounded-[17px] inline-flex flex-col min-w-[100%]">
            <Heading className="mb-[10px]">Filtrowanie</Heading>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="mb-2">
                        <div className="font-semibold mb-2">xxxxx</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div
                                className="flex items-center"
                            >
                                <input
                                    className="absolute opacity-0 w-[20px] h-[20px]"
                                    type="checkbox"
                                    name="f[pa_material][kwarc_truskawkowy]"
                                    value="1"
                                />
                                <div className="custom-checkbox flex justify-center items-center">
                                    <CheckboxEnabledIcon />
                                </div>
                                <label className="pl-2">xxxx</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start mt-2">
                    <button className="transition-colors text-[14x] inline-block px-3 py-2 font-semibold font-jost text-[#DD9788] bg-white hover:text-white hover:bg-[#DD9788] rounded-[999px] border-2 border-solid border-[#DD9788]">
                        Filtruj
                    </button>
                </div>
            </div>
        </div>
    </div>
};
