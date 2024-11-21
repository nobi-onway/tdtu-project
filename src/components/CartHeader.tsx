'use client'
import useCartStore from "@/store/useCartStore";
import Link from "next/link";

function CartHeader() {
    const { selectedProducts } = useCartStore();

    return <Link href='/user/cart' className="relative">
        <span>Giỏ hàng</span>
        <span className="px-1 justify-center items-center flex rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-primary_color text-white text-sm">{selectedProducts.length}</span>
    </Link>;
}

export default CartHeader;