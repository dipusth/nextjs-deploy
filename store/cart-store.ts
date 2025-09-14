import { ProductType } from "@/types/PostType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

 interface CartStore {
  items: ProductType[];
  addItem: (item: ProductType) => void
} 

// export const useCartStore = create<CartStore>()(persist(
//     (set) => ({
//         items: [],
//         addItem: (item) => set((state) => ({ items}))

//     })


// ))
