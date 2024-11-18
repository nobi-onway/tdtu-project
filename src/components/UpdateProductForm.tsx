import usePut from "@/hooks/usePut";
import ProductForm from "./ProductForm";
import { ProductType } from "@/config/dataType";
import { productApi } from "@/config/apiConfig";

type ProductFormPropType = {
    product: ProductType,
    callback: () => void,
}

function UpdateProductForm(props : ProductFormPropType) {
    const { product, callback } = props;
    const { mutate } = usePut<ProductType>({url: productApi, id: product.id});

    const onSubmit = (data : ProductType) => {
        mutate(data)
        callback()
    }

    return <div className="w-[520px]">
        <ProductForm submitTitle="Cập nhật sản phẩm" defaultProduct={product} onSubmit={onSubmit}/>
    </div>;
}

export default UpdateProductForm;