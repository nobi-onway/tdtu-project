'use client'

import CreateProductForm from "@/components/CreateProductForm";
import { useRouter } from "next/navigation";

function CreateProductPage() {
    const router = useRouter()

    return <div className="p-8">
        <h1 className="text-center text-2xl font-bold">Đăng sản phẩm mới</h1>
        <div className="flex flex-col items-center justify-center">
            <CreateProductForm callback={() => router.push('/products')}/>
        </div>
    </div>;
}

export default CreateProductPage;