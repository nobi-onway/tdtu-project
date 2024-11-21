import Payment from "@/components/Payment";

function Checkout() {
    return <div className="p-8 h-dvh">
        <h1 className="text-3xl text-primary_color text-center mb-32">Vui lòng đăng nhập để thanh toán</h1>
        <Payment/>
    </div>;
}

export default Checkout;