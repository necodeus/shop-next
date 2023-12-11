import NumberInput from './NumberInput2';

export default function ModalItem2({
    name = '',
    onDecrease = () => {},
}) {
    return <div className="flex justify-between items-center">
        <div className="flex">
            <div className="flex justify-center items-center">
                <img alt="" width="25px" height="25px" src="/product.png" />
            </div>
            <div className="ml-[19px]">
                {name && <div className="text-[16px] font-medium">{ name }</div>}
            </div>
        </div>
        <div>
            <NumberInput onDecrease={onDecrease} />
        </div>
    </div>;
};
