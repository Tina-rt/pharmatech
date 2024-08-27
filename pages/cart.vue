<template>
    <div class="p-4 md:px-0 lg:px-0 xl:px-0">
        <h1 class="subtitle">Mon Panier</h1>
        <CartList />
		<div class="actions flex w-full justify-center gap-4 mt-8 py-2 flex-wrap">
			<button class="btn btn-secondary">Vide le panier</button>
			<button class="btn btn-primary">Continuer votre commande</button>
		</div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.actions{
	.btn{
		min-width: 240px;
		@media screen and (max-width: 768px){
			min-width: 100%;
			
		}
	}
}
</style>
