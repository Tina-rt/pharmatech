import type { CartItem } from "./cartItem.models";
import type { Produits } from "./produits.model";

export interface OrderItem{
    id: number;
    date: string;
    status: number;
    total: number;
    cartItems: CartItem[];
}