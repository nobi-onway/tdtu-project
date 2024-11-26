'use client'
import { orderApi } from "@/config/apiConfig";
import { OrderType } from "@/config/dataType";
import { FormatVNCurrency } from "@/helpers/currencyHelper";
import { formatDateFromMidnight } from "@/helpers/dateTimeHelper";
import withFetchData from "@/hocs/withFetchData";

const tableColHeader = ["Id", "Tên khách hàng", "Sản phẩm", "Thời gian mua", "Tổng tiền", "Trạng thái"]

function OrderTable({data} : {data : OrderType[]}) {
    const total = data.reduce((total, cur) => total + cur.total, 0)

    return (
        <section className="w-full max-w-full">
            <div className="w-full grid grid-cols-[0.1fr_0.2fr_0.25fr_0.15fr_0.15fr_0.15fr] gap-y-2">
                {tableColHeader.map((header, index) => 
                    <div className="border-b text-2xl border-b-black py-4 font-semibold" key={index}>
                        {header}
                    </div>
                )}
                {data.flatMap((order, index) => Object.values({id: 'TDTU' + order.id, customer: order.customer, products: order.products.map(product => `${product.quantity} x ${product.name}`).join('<br/>'), createAt: formatDateFromMidnight(order.createAt), total: FormatVNCurrency(order.total), status: order.status})).map((value, index) => 
                { 
                    return (
                        <div dangerouslySetInnerHTML={{__html:value}} className="border-b text-xl border-b-black py-6 font-semibold relative" key={index}>
                        </div>
                    )
                }
                )}
            </div>
            <div className="flex flex-col items-end justify-end">
                <h1 className="text-4xl font-bold text-primary_color my-4">Tổng doanh thu: {FormatVNCurrency(total)}</h1>
            </div>
        </section>
    )
}

export default withFetchData(OrderTable, orderApi) ;