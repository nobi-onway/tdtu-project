import Modal from "./Modal";
import CreateProductForm from "./CreateProductForm";

type CreateProductModalPropType = {
    isOpen: boolean,
    onClose: () => void,
}

function CreateProductModal(props : CreateProductModalPropType) {
    const { isOpen, onClose } = props;

    return <Modal hasCloseButton isOpen={isOpen} onClose={onClose}>
        <h1 className="text-center text-2xl">Tạo sản phẩm mới</h1>
        <CreateProductForm callback={onClose}/>
    </Modal>;
}

export default CreateProductModal;