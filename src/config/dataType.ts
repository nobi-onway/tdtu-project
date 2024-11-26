export type ProductType = {
    id: string,
    name: string,
    price: number,
    size: string,
    image: string,
}

export type ProductCartType = {
    id: string,
    quantity: number,
}

export type ProductPurchasedType = ProductCartType & ProductType

export type AccountType = {
    username: string,
    password: string,
}

export type OrderType = {
    id: string,
    customer: string,
    products: ProductPurchasedType[],
    total: number,
    status: string,
    createAt: number,
}