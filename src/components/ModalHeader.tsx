import {
    ArrowLeft as BackIcon,
    X as CloseIcon,
} from 'react-feather';

export default function ModalHeader() {
    return <div className="flex justify-between">
        {
            <BackIcon color="#4D4D4D" className="cursor-pointer" /> || <div></div>
        }
        <CloseIcon color="#4D4D4D" className="cursor-pointer" />
    </div>;
};
