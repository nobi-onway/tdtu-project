'use client'

import { FormatVNCurrency } from "@/helpers/currencyHelper";
import Image from "next/image";
import SignInForm from "./SignInForm";
import { AccountType, OrderType, ProductCartType, ProductPurchasedType, ProductType } from "@/config/dataType";
import useCartStore from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import usePost from "@/hooks/usePost";
import { orderApi, productApi } from "@/config/apiConfig";
import withFetchData from "@/hocs/withFetchData";

function Payment({data} : {data : ProductType[]}) {
    const { clear, selectedProducts } = useCartStore();
    const { push } = useRouter();
    const { mutate } = usePost<OrderType>(orderApi);

    const purchaseProducts = JSON.parse(localStorage.getItem('purchase-products') ?? "[]");

     const products : ProductPurchasedType[] = purchaseProducts.map((item : ProductCartType) => {
        const product = data.find(i => i.id === item.id)

        if(!product) return {}

        return { ...product, quantity: item.quantity }
    })
    
    const total = products.reduce((total, cur) => total + cur.price * cur.quantity, 0);

    const onSubmit = (data : OrderType) => {
        mutate(data)
    }

    const handlePayment = (data : AccountType) => {
        const order : OrderType = {
            id: "",
            customer: data.username,
            products: products,
            total: total,
            status: "Đã thanh toán",
            createAt: Date.now(),
        }
        onSubmit(order);


        clear();
        localStorage.setItem('total-payment', "0")
        push('/user/checkout/success')
    }

    return (
        <section className="flex justify-around gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl">Số tiền bạn cần thanh toán là {FormatVNCurrency(total)}</h1>
                <Image height={240} width={240} alt="payment-icon" src='/images/ewallet.png'/>
            </div>
            <SignInForm onSignIn={handlePayment}/ >
        </section>
    )
}

export default withFetchData(Payment, productApi);