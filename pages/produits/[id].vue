<template>
    <div class="w-full py-5 px-10 flex flex-col gap-6">
        <SectionProduitsDetails />
        <div class="my-4">
            <SectionDescriptionProduct />
        </div>
        <div class="new-products">
            <div class="title-products w-full flex justify-between">
                <h2 class="text-2xl font-bold">Nouveaux Produits</h2>
                <a href="/produits" class="btn btn-ghost"
                    >Voir Tous <Icon name="material-symbols:arrow-right-alt"
                /></a>
            </div>
            <SectionProductList :product-list="produitsMedicaux.slice(0, 4)" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { produitsMedicaux } from "~/mock/produits.mock";

const router = useRouter();
const route = useRoute();

const id = ref(route.params.id);
</script>

<style></style>
