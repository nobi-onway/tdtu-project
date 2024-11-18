'use client'
import { productApi } from "@/config/apiConfig";
import { ProductType } from "@/config/dataType";
import usePost from "@/hooks/usePost";
import ProductForm from "./ProductForm";

type CreateProductFormPropType = {
    callback: () => void,
}

function CreateProductForm(props : CreateProductFormPropType) {
    const {callback} = props
    const { mutate } = usePost<ProductType>(productApi);

    const onSubmit = (data : ProductType) => {
        mutate(data)
        callback()
    }

    return <div className="w-[520px]">
        <ProductForm submitTitle="Đăng sản phẩm" onSubmit={onSubmit}/>
    </div>
}

export default CreateProductForm;