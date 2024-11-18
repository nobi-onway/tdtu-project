import { CircleX } from "lucide-react";

type ModalPropType = {
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void,
    hasCloseButton?: boolean | true;
}

function Modal(props : ModalPropType) {
    const { children, onClose, isOpen, hasCloseButton } = props;

    if(!isOpen) return <></>

    return <div className="bg-slate-900 bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-md shadow-lg relative">
            {children}
            {hasCloseButton && (<button onClick={onClose} className="absolute top-2 right-2">
                <CircleX/>
            </button>)
            }
        </div>
    </div>;
}

export default Modal;