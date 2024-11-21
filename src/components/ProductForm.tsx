import { ProductType } from "@/config/dataType";
import { useForm } from "react-hook-form";

type ProductFormPropType = {
    onSubmit: (data : ProductType) => void,
    defaultProduct?: ProductType,
    submitTitle: string,
}

function ProductForm(props : ProductFormPropType) {
    const { onSubmit, defaultProduct, submitTitle } = props;

    const { register, handleSubmit } = useForm<ProductType>();

    return <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2">
        <label className="flex flex-col gap-1">
            <span className="font-bold text-sm">Tên sản phẩm</span>
            <input defaultValue={defaultProduct?.name} {...register("name", { required: true })} className="border border-black shadow border-opacity-20 rounded p-2" placeholder="Nhập tên sản phẩm" type="text" name="name"/>
        </label>
        <label className="flex flex-col gap-1">
            <span className="font-bold text-sm">Giá sản phẩm</span>
            <input defaultValue={defaultProduct?.price} {...register("price", { required: true, valueAsNumber: true })} className="border border-black shadow border-opacity-20 rounded p-2" placeholder="Nhập tên sản phẩm" min={0} type="number" name="price"/>
        </label>
        <label className="flex flex-col gap-1">
            <span className="font-bold text-sm">Hình ảnh sản phẩm</span>
            <input defaultValue={defaultProduct?.image} {...register("image", { required: true })} className="border border-black shadow border-opacity-20 rounded p-2" placeholder="Nhập tên sản phẩm" type="text" name="image"/>
        </label>
        <label className="flex flex-col gap-1">
            <span className="font-bold text-sm">Kích cỡ sản phẩm</span>
            <input defaultValue={defaultProduct?.size} {...register("size", { required: true })} className="border border-black shadow border-opacity-20 rounded p-2" placeholder="Nhập tên sản phẩm" type="text" name="size"/>
        </label>
        <div className="w-full flex items-center justify-center">
            <input className="text-white w-full hover:cursor-pointer bg-[#22744C] px-4 py-2 rounded uppercase text-sm mt-4" type="submit" value={submitTitle}/>
        </div>
    </form>;
}

export default ProductForm;