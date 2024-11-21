import Image from "next/image";
import Link from "next/link";

function CheckOutSuccessPage() {
    return <section className="flex items-center justify-center flex-col gap-8 h-96">
        <Image width={120} height={120} alt="success-icon" src='/images/checked.png'/>
        <h1 className="text-green-500 font-bold text-4xl">Thanh toán thành công</h1>
        <span>Cảm ơn bạn đã thanh toán. Đơn hàng của bạn sẽ được robot của chúng tôi xử lý</span>
        <Link href='/user' className="text-lg text-white bg-green-500 rounded py-2 px-8">Tiếp tục mua sắm</Link>
    </section>;
}

export default CheckOutSuccessPage;