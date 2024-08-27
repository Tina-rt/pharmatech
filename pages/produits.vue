<template>
    <div>
        <HeroProduct />
        <div class="flex w-full justify-center">
            <Filter />
        </div>
        <div class="py-3 px-7 flex flex-col gap-10">
            <div class="new-products">
                <div class="title-products w-full flex justify-between">
                    <h2 class="text-2xl font-bold">Nouveaux Produits</h2>
                    <a href="#" class="btn btn-ghost"
                        >Voir Tous
                        <Icon name="material-symbols:arrow-right-alt"
                    /></a>
                </div>
                <SectionProductList
                    :product-list="produitsMedicaux.slice(0, 4)"
                />
            </div>
			<div class="popular-product">
                <div class="title-products w-full flex justify-between">
                    <h2 class="text-2xl font-bold">Produits populaire</h2>
                    <a href="#" class="btn btn-ghost"
                        >Voir Tous
                        <Icon name="material-symbols:arrow-right-alt"
                    /></a>
                </div>
                <SectionProductList
                    :product-list="produitsMedicaux.slice(4, 16)"
                />
            </div>
			<div class="Appareil medical">
                <div class="title-products w-full flex justify-between">
                    <h2 class="text-2xl font-bold">Appareil médicale</h2>
                    <a href="#" class="btn btn-ghost"
                        >Voir Tous
                        <Icon name="material-symbols:arrow-right-alt"
                    /></a>
                </div>
                <SectionProductList
                    :product-list="produitsMedicaux.slice(16, 20)"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { produitsMedicaux } from "~/mock/produits.mock";
</script>
