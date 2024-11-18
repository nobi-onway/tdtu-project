import { productApi } from "@/config/apiConfig";
import { ProductType } from "@/config/dataType";
import { FormatVNCurrency } from "@/helpers/currencyHelper";
import useDelete from "@/hooks/useDelete";
import { FilePenIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import UpdateProductModal from "./UpdateProductModal";
import { useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";

const tableColHeader = ["#", "Tên sản phẩm", "Giá", "Kích cỡ", "Hình ảnh", ""]

function RenderImage({url} : {url : string})
{
    return <Image alt="product-img" fill objectFit="contain" className="object-left" src={url}/>
}


type RenderActionPropType = {
    handleDelete: () => void,
    handleUpdate: () => void,
}
function RenderAction(props : RenderActionPropType)
{
    const { handleDelete, handleUpdate } = props

    return <div className="flex gap-4 items-center justify-center">
        <button onClick={handleUpdate}>
            <FilePenIcon color="#779ECB" size={20}/>
        </button>
        <button onClick={handleDelete}>
            <Trash2 color="#FF6962" size={20}/>
        </button>
    </div>
}

function ProductTable( { products } : { products : ProductType[] }) {
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false)
    const [openDeleteConfirmModal, setDeleteConfirmModal] = useState<boolean>(false)
    const [selectedProduct, setSelectedProduct] = useState<ProductType>()
    const { mutate } = useDelete(productApi)

    const handleDeleteProduct = (product : ProductType) => {
        setSelectedProduct(product)
        setDeleteConfirmModal(true)
    }

    const handleUpdateProduct = (product : ProductType) => {
        setSelectedProduct(product)
        setOpenUpdateModal(true);
    }

    return ( 
        <div className="w-full max-w-full">
            <UpdateProductModal product={selectedProduct}  isOpen={openUpdateModal} onClose={() => setOpenUpdateModal(false)} />
            <DeleteConfirmModal onConfirm={() => {
                if(!selectedProduct) return;
                mutate(selectedProduct.id)
                setDeleteConfirmModal(false)
            }} isOpen={openDeleteConfirmModal} onCancel={() => setDeleteConfirmModal(false)}/>
            <div className="w-full grid grid-cols-[0.05fr_0.3fr_0.15fr_0.15fr_0.12fr_0.2fr]">
                {tableColHeader.map((header, index) => 
                    <div className="border-b border-b-black py-4 font-semibold" key={index}>
                        {header}
                    </div>
                )}
                {products.flatMap(product => Object.values({id: product.id, name: product.name, price: FormatVNCurrency(product.price), size: product.size, image: <RenderImage url={product.image} />, action: <RenderAction handleUpdate={() => handleUpdateProduct(product)} handleDelete={() => handleDeleteProduct(product)}/>})).map((value, index) => 
                  { 
                    return (
                        <div className="border-b border-b-black py-6 font-semibold relative" key={index}>
                            {value}
                        </div>
                    )
                  }
                )}
            </div>
        </div> 
    );
}

export default ProductTable;