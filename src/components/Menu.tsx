'use client'
import { productApi } from "@/config/apiConfig";
import { ProductType } from "@/config/dataType";
import withFetchData from "@/hocs/withFetchData";
import ProductCart from "./ProductCart";

type MenuPropsType = {
    className?: string
}

function Menu({data}:{data : ProductType[]}) {
    return <section className={`grid grid-cols-4 gap-4 h-full`}>
        {data.map((product, index) => {
            return <ProductCart product={product} key={index}/>
        })}
    </section>;
}

export default withFetchData<MenuPropsType, ProductType[]>(Menu, productApi) ;