<template>
    <div class="flex justify-between p-5 px-8">
        <div class="flex items-center">
            <NuxtImg src="/img/logo_pharmatech.png" width="100" />
        </div>
        <div class="search-group flex flex-1 max-w-[900px] border-2 border-r-5 items-center bg-slate-50 justify-between">
            <CustomDropdown :options="categoryList" class="min-w-[140px]" />
			<div class="border-r-2 h-2/3 w-1"></div>
            <input
                type="text"
                class="search-input input form-control bg-transparent flex-1 outline-none"
                placeholder="Rechercher des produits médicales"
            />

            <button class="search-button btn btn-primary">
                <Icon name="uil:search" />
            </button>
        </div>
		<div class="actions">
			<div v-if="!isConnected" class="btn btn-primary">Se connecter</div>
			<div v-else class="flex items-center gap-1">
				<button class="btn btn-ghost "><Icon name="uil:heart" size="20" /></button>
				<button class="btn btn-ghost "><Icon name="uil:shopping-bag" size="20" /></button>
				<AvatarDropdown />
			</div>
		</div>
    </div>
</template>

<script lang="ts" setup>
const categoryList = ref([
    "Pharmacie",
    "Matériel médical",
    "Hygiène",
    "Beauté",
    "Nutrition",
    "Sport",
]);

const isConnected = ref(true);

</script>

<style></style>
