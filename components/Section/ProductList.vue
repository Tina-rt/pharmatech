<template>
    <div>
        <template v-if="props.productList">
            <div
                class="product-list grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 py-4 place-items-center"
            >
                <CardProduit
                    class="w-full"
                    :produits="produit"
                    v-for="(produit, key) in props.productList"
                    :key="key"
                    @add-to-cart="addCart"
                />
            </div>
        </template>
        <div class="w-full p-4 text-center italic" v-else>
            Oops, il n'y a pas encore de produits dans cette section
        </div>
    </div>
</template>

<script lang="ts" setup>
import { produitsMedicaux } from "~/mock/produits.mock";
import type { Produits } from "~/types/produits.model";

const cartStore = useMyCartStoreStore();

const props = defineProps<{
    productList?: Produits[];
}>();


const addCart = (product: Produits) => {

    cartStore.addProductToCart({
        produits: product,
        quantity: 1
    })

    
};

const getProductList = async () => {
    
}

</script>

<style scoped lang="scss">
.product-list {
    // grid-template-rows: 300px;
}
</style>
