import { ProductType } from "@/config/dataType";
import { useForm } from "react-hook-form";

const data = [
    {
    "image": "https://gongcha.com.vn/wp-content/uploads/2018/10/kem-tc.png",
    "name": "Milk Tea Ice-crem with Pearl",
    "price": 62000,
    "size": "M",
    "id": "1"
  },
  {
    "image": "https://gongcha.com.vn/wp-content/uploads/2021/03/ALISAN-TRA%CC%81I-CA%CC%82Y.png",
    "name": "Trà Alisan Trái Cây",
    "price": 68000,
    "size": "L",
    "id": "2"
  },
  {
    "image": "https://gongcha.com.vn/wp-content/uploads/2018/02/Oolong-v%E1%BA%A3i-2.png",
    "name": "Lychee Oolong Tea",
    "price": 87000,
    "size": "L",
    "id": "3"
  },
  {
    "image": "	https://gongcha.com.vn/wp-content/uploads/2019/11/Okinawa-Milk-Foam-Smoothie.png",
    "name": "Okinawa Oreo Cream Milk Tea",
    "price": 69000,
    "size": "L",
    "id": "4"
  },
  {
    "image": "https://gongcha.com.vn/wp-content/uploads/2018/08/Strawberry-Earl-grey-latte.png",
    "name": "Strawberry Earl Grey Latte",
    "price": 32000,
    "size": "S",
    "id": "5"
  }
]

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