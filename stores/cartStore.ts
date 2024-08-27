import { defineStore } from "pinia";
import type { Produits } from "~/types/produits.model";

export const useMyCartStoreStore = defineStore({
    id: "myCartStoreStore",
    state: () => ({
        cartStore: [] as Produits[],
    }),
    actions: {
        addProductToCart(product: Produits) {
            this.cartStore.push(product);
        },
        removeProductFromCart(product: Produits) {
            const index = this.cartStore.indexOf(product);
            this.cartStore.splice(index);
        },
    },
});
