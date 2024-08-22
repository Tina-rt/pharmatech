<template>
    <div class="relative">
        <button
            @click="isOpen = !isOpen"
            class="bg-transparent text-[#666666] py-2 px-4 focus:outline-none flex items-center justify-between w-full"
        >
            <div>
                {{ selectedOption || "Select an option" }}
            </div>
            <Icon name="uil:angle-down" v-if="!isOpen" class="w-5 h-5 ml-2" />
            <Icon name="uil:angle-up" v-else class="w-5 h-5 ml-2" />
        </button>
        <ul
            v-if="isOpen"
            class="absolute z-10 bg-white py-2 w-40 rounded-md shadow"
        >
            <li v-if="!props.options" class="px-4 py-2">
                Pas d'options disponible
            </li>
            <li
                v-for="option in props.options"
                :key="option"
                @click="selectOption(option)"
                class="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    options: string[];
}>();

const selectedOption = ref<string | null>(null);

const isOpen = ref<boolean>(false);

const selectOption = (option: string) => {
    selectedOption.value = option;
    isOpen.value = false;
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.querySelector(".relative");
    if (dropdown && !dropdown.contains(event.target as Node)) {
        isOpen.value = false;
    }
};
</script>

<style>
/* Add your custom styles here */
</style>
