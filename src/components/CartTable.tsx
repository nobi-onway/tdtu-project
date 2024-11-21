'use client'
import { productApi } from "@/config/apiConfig";
import { ProductCartTableType, ProductCartType, ProductType } from "@/config/dataType";
import { FormatVNCurrency } from "@/helpers/currencyHelper";
import withFetchData from "@/hocs/withFetchData";
import useCartStore from "@/store/useCartStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useState } from "react";
import Link from "next/link";

const tableColHeader = ["Tên sản phẩm", "Hình ảnh", "Số lượng", "Giá", ""]

function RenderImage({url} : {url : string})
{
    return <Image alt="product-img" fill objectFit="contain" className="object-left" src={url}/>
}

type RenderActionPropType = {
    handleDelete: () => void,
}
function RenderAction(props : RenderActionPropType)
{
    const { handleDelete } = props

    return <div className="flex gap-4 items-center justify-center">
        <button onClick={handleDelete}>
            <Trash2 color="#FF6962" size={20}/>
        </button>
    </div>
}

function CartTable({data} : {data : ProductType[]}) {
    const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState<boolean>(false);
    const [productId, setProductId] = useState<string | undefined>(undefined)
    const { remove } = useCartStore();
    const purchaseProducts = JSON.parse(localStorage.getItem('purchase-products') ?? "[]");

    const products : ProductCartTableType[] = purchaseProducts.map((item : ProductCartType) => {
        const product = data.find(i => i.id === item.id)

        if(!product) return {}

        return { ...product, quantity: item.quantity }
    })

    const total = products.reduce((total, cur) => total + cur.price * cur.quantity, 0)

    const handleDeleteProduct = (id : string) => {
        setProductId(id)
        setOpenDeleteConfirmModal(true)
    }

    return (
        <section className="w-full max-w-full">
            <DeleteConfirmModal onConfirm={() => {
                if(!productId) return;
                remove(productId)
                setProductId(undefined)
                setOpenDeleteConfirmModal(false)
            }} isOpen={openDeleteConfirmModal} onCancel={() => setOpenDeleteConfirmModal(false)}/>
            <div className="w-full grid grid-cols-[0.25fr_0.2fr_0.15fr_0.2fr_0.2fr]">
                {tableColHeader.map((header, index) => 
                    <div className="border-b text-2xl border-b-black py-4 font-semibold" key={index}>
                        {header}
                    </div>
                )}
                {products.flatMap((product, index) => Object.values({name: product.name, image: <RenderImage url={product.image} />, quantity: product.quantity, price: FormatVNCurrency(product.price * product.quantity), action: <RenderAction handleDelete={() => handleDeleteProduct(product.id)}/>})).map((value, index) => 
                  { 
                    return (
                        <div className="border-b text-xl border-b-black py-6 font-semibold relative" key={index}>
                            {value}
                        </div>
                    )
                  }
                )}
            </div>
            <div className="flex flex-col items-end justify-end">
                <h1 className="text-4xl font-bold text-primary_color my-4">Tổng tiền: {FormatVNCurrency(total)}</h1>
                {purchaseProducts.length > 0 && <Link onClickCapture={() => localStorage.setItem('total-payment', total.toString())} href='/user/checkout' className="uppercase border bg-slate-600 text-white p-2 rounded text-2xl">Đặt hàng</Link>}
            </div>
        </section>
    )
}

export default withFetchData(CartTable, productApi);