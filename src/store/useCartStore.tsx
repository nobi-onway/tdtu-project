import { ProductCartType } from '@/config/dataType';
import {create} from 'zustand'

type CartStoreStateType = {
    selectedProducts: ProductCartType[],

    add: (product : ProductCartType) => void,
    remove: (id : string) => void,
    incByOne: (id : string) => void,
    descByOne: (id : string) => void,
    clear: () => void,
}

const useCartStore = create<CartStoreStateType>((set) => ({
    selectedProducts: JSON.parse(localStorage.getItem('purchase-products') ?? '[]'),

    add: (product : ProductCartType) => set(
        (state : CartStoreStateType) => 
        {
            const newProducts = [...state.selectedProducts, product];
            localStorage.setItem('purchase-products', JSON.stringify(newProducts))

            return ({ selectedProducts: newProducts})
        }
    ),
    remove: (id : string) => set(
        (state : CartStoreStateType) => 
        {
            const newProducts = [...state.selectedProducts].filter(product => product.id != id);
            localStorage.setItem('purchase-products', JSON.stringify(newProducts))

            return ({ selectedProducts: newProducts})
        }
    ),
    incByOne: (id: string) => set(
        (state : CartStoreStateType) => 
        {
            const newProducts = [...state.selectedProducts].map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product);
            localStorage.setItem('purchase-products', JSON.stringify(newProducts))

            return ({ selectedProducts: newProducts})
        }
    ),
    descByOne: (id: string) => set(
        (state : CartStoreStateType) => 
        {
            const newProducts = [...state.selectedProducts].map(product => product.id === id ? {...product, quantity: product.quantity - 1} : product);
            localStorage.setItem('purchase-products', JSON.stringify(newProducts))

            return ({ selectedProducts: newProducts})
        }
    ),
    clear: () => set(
        (state : CartStoreStateType) => 
        {
            localStorage.setItem('purchase-products', JSON.stringify([]))

            return ({selectedProducts: []})
        }
    )
}))

export default useCartStore;