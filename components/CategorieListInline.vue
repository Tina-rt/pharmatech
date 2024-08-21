<template>
    <div class="flex gap-3 w-full justify-evenly my-2 flex-wrap">
        <div class="category-item" v-for="(category, index) in categorieList" :key="index">
			{{ category.label }}
		</div>
    </div>
</template>

<script lang="ts" setup>
const categorieList = ref([
    {
        label: "Douleur",
        link: "#",
    },
    {
        label: "Fièvre",
        link: "#",
    },
    {
        label: "Toux",
        link: "#",
    },
    {
        label: "Allergies",
        link: "#",
    },
    {
        label: "Maux de tête",
        link: "#",
    },
    {
        label: "Digestion",
        link: "#",
    },
    {
        label: "Sommeil",
        link: "#",
    },
    {
        label: "Vitamines",
        link: "#",
    },
    {
        label: "Soins de la peau",
        link: "#",
    },
]);
</script>

<style></style>
