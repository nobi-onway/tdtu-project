'use client'

import { FormatVNCurrency } from "@/helpers/currencyHelper";
import Image from "next/image";
import SignInForm from "./SignInForm";
import { AccountType } from "@/config/dataType";
import useCartStore from "@/store/useCartStore";
import { useRouter } from "next/navigation";

function Payment() {
    const total = localStorage.getItem('total-payment') || '0';
    const { clear } = useCartStore();
    const { push } = useRouter();

    const handlePayment = (data : AccountType) => {
        clear();
        localStorage.setItem('total-payment', "0")
        push('/user/checkout/success')
    }

    return (
        <section className="flex justify-around gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl">Số tiền bạn cần thanh toán là {FormatVNCurrency(parseInt(total))}</h1>
                <Image height={240} width={240} alt="payment-icon" src='/images/ewallet.png'/>
            </div>
            <SignInForm onSignIn={handlePayment}/ >
        </section>
    )
}

export default Payment;