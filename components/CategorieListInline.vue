<template>
    <div class="flex gap-3 w-full justify-evenly my-2 flex-wrap">
        <div
            class="category-item"
            v-for="(category, index) in categorieList"
            :key="index"
        >
            {{ category.nom }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Category } from '~/types/category.model';

const categorieList = ref<Category[]>([
    
]);

const getCategorieList = async () => {
    const { data } = await $api("categorie");
    categorieList.value = data;
};

await getCategorieList();
</script>

<style></style>
