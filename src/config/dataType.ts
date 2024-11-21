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

export type ProductCartTableType = ProductCartType & ProductType

export type AccountType = {
    username: string,
    password: string,
}