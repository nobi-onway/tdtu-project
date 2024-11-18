import { Trash2Icon } from "lucide-react";
import Modal from "./Modal";

type DeleteConfirmModalPropType = {
    isOpen: boolean,
    onCancel: () => void,
    onConfirm: () => void,
}

function DeleteConfirmModal(props : DeleteConfirmModalPropType) {
    const { isOpen, onCancel, onConfirm } = props
    return <Modal hasCloseButton={false} isOpen={isOpen} onClose={onCancel}>
        <div className="flex flex-col items-center justify-center gap-4 w-80">
            <Trash2Icon size={60} color="#FF6962"/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center font-bold text-lg">Bạn muốn xóa?</h1>
                <span className="text-gray-400 text-xs text-center">Bạn thật sự muốn xóa sản phẩm này? Quá trình này không thể hoàn tác.</span>
            </div>
            <div className="flex items-center justify-center gap-4">
                <button onClick={onConfirm} className="rounded-full px-4 py-2 bg-primary_color text-white text-sm">Chắc chắn xóa</button>
                <button onClick={onCancel} className="rounded-full px-4 py-2 border border-gray-400 text-gray-700 text-sm">Hủy</button>
            </div>
        </div>  
    </Modal>
}

export default DeleteConfirmModal;