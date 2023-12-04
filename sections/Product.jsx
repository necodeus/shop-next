import Button from "../components/Button";
import { open } from '../features/newOrder';

export default function ProductSection({ currentProduct }) {
    return <div className="grid grid-cols-1 sm:grid-cols-[42%,minmax(0,1fr)] gap-5">
        <div className="mt-[20px] md:mt-0">
            <div>
                <div className="overflow-hidden rounded-[17px]">
                    <img
                        src="https://dummyimage.com/600x600/f6f6f6/c2c2c2.jpg&amp;text=+magiaziemi+"
                        className="rounded-[17px]"
                        width="100%"
                    />
                </div>
            </div>
        </div>
        <div className="mt-5 md:mt-0 text-[17px]">
            <h1 className="font-semibold text-mineshaft text-[34px]">{ currentProduct?.name }</h1>

            <div className="my-[20px]">{ currentProduct?.description }</div>

            <div className="flex items-center">
                <div className="font-semibold mr-5">
                    <Button>Do koszyka</Button>
                </div>
                <div className="font-semibold mt-[20px]">
                    <div className="text-[15px]">Cena brutto:</div>
                    <div className="flex items-end mb-1">
                        <div className="text-[24px]">
                            { currentProduct?.gross_price * 1 } PLN
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
