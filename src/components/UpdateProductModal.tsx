import { ProductType } from "@/config/dataType";
import UpdateProductForm from "./UpdateProductForm";
import Modal from "./Modal";

type UpdateProductModalPropType = {
    isOpen: boolean,
    onClose: () => void,
    product: ProductType | undefined,
}

function UpdateProductModal(props : UpdateProductModalPropType) {
    const { isOpen, onClose, product } = props;

    if(!product) return <></>

    return <Modal hasCloseButton isOpen={isOpen} onClose={onClose}>
        <h1 className="text-center text-2xl">Cập nhật sản phẩm</h1>
        <UpdateProductForm callback={onClose} product={product}/>
    </Modal>;
}

export default UpdateProductModal;