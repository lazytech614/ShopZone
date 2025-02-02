import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[]
    addItem: (product: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (product: Product) => {
                const currentItems = get().items
                const existingItem = currentItems.find((item) => item.id === product.id)

                if(existingItem) return toast("Item already in cart.")

                set({items: [...get().items, product]})
                toast.success("Item added to cart.")
            },
            removeItem: (id: string) => {
                set({items: [...get().items.filter((item) => item.id !== id)]})
                toast.success("Item removed from cart.")
            },
            removeAll: () => {
                set({items: []})
                toast.success("Cart cleared.")
            }
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useCart