import NumberInput from './NumberInput';

export default function ModalItem({
    name = '',
    description = '',
    quantity = 0,
    onIncrease = () => {},
    onDecrease = () => {},
    onChange = () => {},
}) {
    return <div className="flex justify-between items-center">
        <div className="flex">
            <div className="flex justify-center items-center">
                <img alt="" width="25px" height="25px" src="/product.png" />
            </div>
            <div className="ml-[19px]">
                {name && <div className="text-[16px] font-medium">{ name }</div>}
                {description && <div className="text-[16px] font-normal">{ description }</div>}
            </div>
        </div>
        <div>
            <NumberInput
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onChange={onChange}
                placeholder="0"
                value={quantity}
            />
        </div>
    </div>;
};
