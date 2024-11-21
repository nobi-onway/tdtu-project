'use client'
import ProductTable from "@/components/ProductTable";
import { productApi } from "@/config/apiConfig";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import CreateProductModal from "./CreateProductModal";
import withFetchData from "@/hocs/withFetchData";
import { ProductType } from "@/config/dataType";

function ProductCatalog({data} : {data : ProductType[]}) {
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
    return (
        <div className="flex flex-col px-10">
            <CreateProductModal isOpen={openCreateModal} onClose={() => setOpenCreateModal(false)}/>
            <h1 className="text-center text-4xl uppercase font-bold">Sản phẩm của bạn</h1>
            <div className="flex justify-end">
                <button onClick={() => setOpenCreateModal(true)} className="p-3 py-2 rounded hover:bg-slate-600 border border-slate-600 hover:text-white">Thêm mới +</button>
            </div>
            <ProductTable products={data}/>
        </div>
    );
}

export default withFetchData(ProductCatalog, productApi);