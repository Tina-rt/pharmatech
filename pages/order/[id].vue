<template>
    <div class="lg:px-10 xl:px-10 md:px-10 p-5 flex flex-col gap-4">
        <h1 class="subtitle">Détails Commandes</h1>

        <div class="grid main-details-commande">
            <div class="flex flex-col gap-3 w-full">
        <h2 class="font-bold">Commande N° #{{ currentOrder.id }}</h2>
                
                <table class="table table-xs md:table-md lg:table-lg">
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Quantité</th>
                            <th>Prix unitaire</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cartitem in currentOrder.cartItems">
                            <td class="flex items-center gap-2">
                                <img
                                    :src="cartitem.produits.image"
                                    alt=""
                                    class="w-10"
                                /><span>{{ cartitem.produits.nom }}</span>
                            </td>
                            <td class="text-right">{{ cartitem.quantity }}</td>
                            <td>Ar {{ cartitem.produits.prix }}</td>
                            <td>
                                Ar
                                {{ cartitem.produits.prix * cartitem.quantity }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="min-w-[20rem] flex flex-col gap-4">
                <div class="w-full flex justify-end">
                    <div
                        class="w-fit text-green font-bold flex gap-2 items-center"
                    >
                        <span> Statut: </span>
                        <Status :status="currentOrder.status" />
                    </div>
                </div>
                <CartBill />
                <div class="flex flex-col gap-2 justify-evenly rounded-md bg-vert-claire-4 p-4 ">
                    <div class="flex gap-4">
                        <div class="text-green font-bold">Date de commande</div>
                        <div>{{ currentOrder.date }}</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="text-green font-bold">Date d'arrivée: </div>
                        <div>{{ currentOrder.date }}</div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 justify-evenly rounded-md bg-vert-claire-4 p-4 ">
                    <div class="flex flex-wrap gap-2">
                        <div class="text-green font-bold">Adresse de Livraison:</div>
                        <div>Analakely Lot 20.22bis, rue RAKOTO JOHN Antananarivo</div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <div class="text-green font-bold">Payé par: </div>
                        <div>Carte de crédit</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { OrderItem } from "~/types/orderItem.models";

const route = useRoute();
const currentOrder = ref<OrderItem>({
    id: 1,
    date: "2021-10-10",
    status: 0,
    total: 1000,
    cartItems: [
        {
            produits: {
                id: 8,
                nom: "Baume du Tigre",
                description:
                    "Baume utilisé pour soulager les douleurs musculaires et les articulations.",
                prix: 120000.5,
                image: "https://m.media-amazon.com/images/I/71oGynPzZQL.jpg",
                stock: 60,
                categorie: "Soins du Corps",
                marque: "Tiger Balm",
                numero_serie: "TGB67890",
                caracteristique_principale: "Formule traditionnelle",
                reduction: 0,
                tva_pourcentage: 10,
                createdAt: new Date("2024-06-10"),
                updatedAt: new Date("2024-07-15"),
            },
            quantity: 1,
        },
        {
            produits: {
                id: 9,
                nom: "Paracétamol",
                description:
                    "Médicament utilisé pour soulager la douleur et abaisser la fièvre.",
                prix: 50000.5,
                image: "https://m.media-amazon.com/images/I/71oGynPzZQL.jpg",
                stock: 60,
                categorie: "Médicaments",
                marque: "Doliprane",
                numero_serie: "DOLI67890",
                caracteristique_principale: "Formule traditionnelle",
                reduction: 0,
                tva_pourcentage: 10,
                createdAt: new Date("2024-06-10"),
                updatedAt: new Date("2024-07-15"),
            },
            quantity: 2,
        },
    ],
});

const currentOrderId = route.params.id;
</script>

<style scoped lang="scss">
.main-details-commande {
    grid-template-columns: 1fr 30rem;
    gap: 2rem;

    @media screen and (max-width: 786px) {
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
    }
}
</style>
