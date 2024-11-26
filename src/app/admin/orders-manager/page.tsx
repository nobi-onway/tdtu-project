import OrderTable from "@/components/OrderTable";

const orders = [
    {
        customer: "hú ngiêu",
        products: [
            {
                name: ""
            }
        ],
        total: 30000,
        state: "Đã thanh toán",
        createAt: Date.now()
    }
]

function OrdersManagerPage() {
    return <div className="p-8">
        <h1 className="text-center font-bold text-4xl text-primary_color">Quản lí đơn hàng</h1>
        <OrderTable/>
    </div>;
}

export default OrdersManagerPage;