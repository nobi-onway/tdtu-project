import { ProductType } from "@/config/dataType";
import { ShoppingCart } from "lucide-react";
import { FormatVNCurrency } from "@/helpers/currencyHelper";
import Image from "next/image";

type ProductCartPropsType = {
    product : ProductType,
}

function ProductCart(props : ProductCartPropsType) {
    const {name, image, price, size} = props.product;

    return ( 
        <div className="h-96 bg-white flex flex-col gap-2 col-span-1 p-4 relative shadow">
            <span className="text-2xl font-bold text-center">{name}</span>
            <div className="relative w-full flex-1">
                <Image alt={`${name}-img`} objectFit="contain" fill src={image}/>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-lg">Size: {size}</span> 
                <span className="text-lg">{FormatVNCurrency(price)}</span> 
            </div>
            <div className="flex items-center justify-center mt-2">
                <button className="p-2 bg-primary_color text-white w-fit rounded flex gap-2">
                    <ShoppingCart/>
                    Thêm vào giỏ hàng
                </button>
            </div>
            <span className="rounded-full size-8 bg-bg_color absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
            <span className="rounded-full size-8 bg-bg_color absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span className="rounded-full size-8 bg-bg_color absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
            <span className="rounded-full size-8 bg-bg_color absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></span>
        </div> 
    );
}

export default ProductCart;