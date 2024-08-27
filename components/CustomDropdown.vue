<template>
    <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost">{{ placeholder }} <Icon name="mdi:chevron-down" size="20"/></div>
        <ul tabindex="0" class="dropdown-content menu bg-white z-[1] w-52 p-2 shadow">
            <li v-for="option in props.options">
                <a href="">{{ option }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    options: string[];
    placeholder?: string;
}>();


</script>

<style>
/* Add your custom styles here */
</style>
