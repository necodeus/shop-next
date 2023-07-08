import {
    ArrowLeft as BackIcon,
    X as CloseIcon,
} from 'react-feather';

export default function ModalHeader({ handleBack, handleClose }) {
    return <div className="flex justify-between">
        {
            handleBack && <BackIcon color="#4D4D4D" className="cursor-pointer" onClick={handleBack} />
            || <div></div>
        }
        <CloseIcon color="#4D4D4D" className="cursor-pointer" onClick={handleClose} />
    </div>;
};
