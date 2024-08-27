<template>
    <div class="p-2 flex gap-2 items-center ">
        <CustomDropdown placeholder="Catégories" :options="categoryList" />
        <span>|</span>
        <CustomDropdown placeholder="Types" :options="categoryList" />

        <span>|</span>
        <CustomDropdown placeholder="Prix" :options="priceFilter" />

        <span>|</span>
        <CustomDropdown placeholder="Préscription" :options="categoryList" />

    </div>
</template>

<script lang="ts" setup>
const categoryList = ref(["Médicaments", "Matériels"]);
const priceFilter = ref(['Croissant', 'Décroissant'])

</script>

<style></style>
