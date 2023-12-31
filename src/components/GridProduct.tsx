import Link from "next/link";

import Button from "./Button";
import css from './ProductInShopCategory.module.css';

export default function GridProduct({ category, product }: any) {
    return (
        <div className="relative flex flex-col" >
            <div className="rounded-[17px] overflow-hidden">
                <img
                    alt=""
                    className="rounded-[17px]"
                    src="https://dummyimage.com/600x600/f6f6f6/c2c2c2.jpg&amp;text=+magiaziemi+"
                    width="100%"
                />
            </div>
            <Link
                href={"/shop/" + category.slug + '/' + product.slug}
                className={css.productLink + " flex grow items-center text-center font-normal mt-[10px] justify-center text-mineshaft font-jost text-[22px] tracking-wider"}
            >
                <>
                    <div className="absolute top-0 bottom-0 right-0 left-0"></div>
                    { product.name }
                </>
            </Link>
            <div className="text-center font-semibold mb-2 text-mineshaft font-jost text-[22px] tracking-wider">
                <div className="flex justify-center items-end">{product.gross_price * 1} PLN</div>
            </div>
            <div className="text-center mb-3 text-[14px] flex justify-center items-center">
                <Button>Do koszyka</Button>
                <Link
                    href={"/shop/" + category.slug + '/' + product.slug}
                    className={css.productLinkIcon + " mx-2 transition-colors relative z-10 inline-block px-3 py-3 font-semibold font-jost text-[#DD9788] bg-white rounded-[999px] border-2 border-solid border-[#DD9788] tracking-wider"}
                >
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                    >
                        <circle
                            cx="11"
                            cy="11"
                            r="8"
                            shapeRendering="geometricPrecision"
                        ></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </Link>
            </div>
        </div>
    );
};
