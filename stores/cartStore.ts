import { defineStore } from "pinia";
import type { CartItem } from "~/types/cartItem.models";
import type { Produits } from "~/types/produits.model";

const { calculateTotal, calculateTva } = useCalculateCart();

export const useMyCartStoreStore = defineStore({
    id: "myCartStoreStore",
    state: () => {
        if (import.meta.client) {
            const cartStore = localStorage.getItem("cartStore");
            if (cartStore) {
                return {
                    cartStore: JSON.parse(cartStore) as CartItem[],
                    shipping: 1000,
                };
            } 
        }
        return {
            cartStore: [] as CartItem[],
            shipping: 1000,
        };
    },

    actions: {
        addProductToCart(cartItem: CartItem) {
            if (
                this.cartStore.some(
                    (val) => val.produits.id == cartItem.produits.id
                )
            ) {
                const index = this.cartStore.findIndex(
                    (val) => val.produits.id == cartItem.produits.id
                );
                this.cartStore[index].quantity += cartItem.quantity;
                return;
            }
            this.cartStore.push(cartItem);
            this.updateCartStore();
        },
        removeProductFromCart(cartItem: CartItem) {
            const index = this.cartStore.indexOf(cartItem);
            this.cartStore.splice(index);
            this.updateCartStore();
        },
        updateCartItem(cartItem: CartItem) {
            const index = this.cartStore.findIndex(
                (val) => val.produits.id == cartItem.produits.id
            );
            if (index > -1) {
                console.log(cartItem);
                this.cartStore[index] = cartItem;
            }
            this.updateCartStore();
        },
        emptyCart() {
            this.cartStore = [];
            this.updateCartStore();
        },
        updateCartStore() {
            localStorage.setItem("cartStore", JSON.stringify(this.cartStore));
        },
    },
    getters: {
        total(state) {
            return calculateTotal(this.cartStore, this.shipping);
        },

        tva(state) {
            return calculateTva(calculateTotal(this.cartStore, this.shipping));
        },

        totalBillWithTva(state) {
            const total = calculateTotal(this.cartStore, this.shipping);
            return total + calculateTva(total);
        },
    },
});
