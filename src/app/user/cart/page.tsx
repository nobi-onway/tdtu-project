import CartTable from "@/components/CartTable";
import { useSearchParams } from "next/navigation";

function CartPage() {
    return <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-5xl font-bold my-10 text-primary_color">Giỏ hàng</h1>
        <CartTable/>
    </div>;
}

export default CartPage;