<template>
    <div class="collapse bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title font-medium flex w-full justify-between items-center">
            <div>
            <div class="text-xl">Commande #1 du {{ props.order.date }}</div>
				<div class="total italic">Ar{{ props.order.total }}</div>
			</div>
			<Status :status="{label: 'En cours', status: 0}"/>
        </div>
        <div class="collapse-content overflow-x-auto">
            <table class="table table-xs lg:table-lg md:table-md xl:table-lg">
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Prix unitaire</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cartitem in props.order.cartItems">
                        <td>{{ cartitem.produits.nom }}</td>
                        <td>{{ cartitem.quantity }}</td>
                        <td>Ar {{ cartitem.produits.prix }}</td>
                        <td>Ar {{ cartitem.produits.prix * cartitem.quantity}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { OrderItem } from '~/types/orderItem.models';


const props = defineProps<{
	order: OrderItem;
}>()

</script>

<style></style>
