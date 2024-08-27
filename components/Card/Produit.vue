<template>
    <div class="card-produits">
        <div class="img-produit">
            <img :src="produits.image" alt="" />
        </div>
        <div class="info-produit">
            <h3 :title="produits.nom">{{ produits.nom }}</h3>
            <p>{{ produits.prix }}</p>
        </div>
		<div class="card-footer w-full">
			<div class="btn btn-primary border-r-0 w-full"> Ajouter au panier <Icon name="uil:shopping-bag" size="20"/></div>
		</div>
    </div>
</template>

<script lang="ts" setup>
import type { Produits } from "~/types/produits.model";

const props = defineProps<{
    produits: Produits;
}>();
</script>

<style scoped lang="scss">
.card-produits {
    border-radius: 12px;
    display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: space-between;
    aspect-ratio: 320/390;
    max-width: 400px;
	box-shadow: 0px 4px 26px 0px #0000001A;

	.img-produit{
		width: 100%;
		img{
			width: 100%;
			height: 300px;
			max-height: 100%;
			object-fit: contain;
			border-radius: 12px 12px 0 0;
		}
	}

	.info-produit{
		width: 100%;
        max-height: fit-content;
		padding: 1rem;
	}
    h3 {
        font-size: 1.4rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        text-wrap: nowrap
    }
}
</style>
