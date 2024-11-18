'use client'
import ProductTable from "@/components/ProductTable";
import { productApi } from "@/config/apiConfig";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import CreateProductModal from "./CreateProductModal";

function ProductCatalog() {
    const {data, isLoading} = useFetch(productApi)     
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

    if(isLoading) return <></>

    return (
        <div className="flex flex-col px-10">
            <CreateProductModal isOpen={openCreateModal} onClose={() => setOpenCreateModal(false)}/>
            <h1 className="text-center text-2xl uppercase font-bold">Sản phẩm của bạn</h1>
            <div className="flex justify-end">
                <button onClick={() => setOpenCreateModal(true)} className="p-3 py-2 rounded hover:bg-slate-600 border border-slate-600 hover:text-white">Thêm mới +</button>
            </div>
            <ProductTable products={data}/>
        </div>
    );
}

export default ProductCatalog;