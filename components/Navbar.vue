<template>
    <div class="p-5 px-8 flex flex-col gap-4 items-center bg-white">
        <div class="flex justify-between w-full">
            <div class="flex items-center">
                <NuxtLink to="/">
                    <NuxtImg src="/img/logo_pharmatech.png" width="100" />
                </NuxtLink>
            </div>
            <div
                class="hidden lg:flex md:flex search-group flex-1 max-w-[900px] border-2 border-r-5 items-center bg-slate-50 justify-between"
            >
                <CustomDropdown
                    :placeholder="'Categorie'"
                    :options="categoryList"
                    class="min-w-[140px]"
                />
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
                <div v-if="!isConnected" class="btn btn-primary">
                    Se connecter
                </div>
                <div v-else class="flex items-center gap-4">
                    <button class="btn btn-ghost">
                        <Icon name="uil:heart" size="20" />
                    </button>
                    <div class="indicator">
                        <span
                            class="indicator-item badge badge-primary badge-sm"
                            >{{
                                cartItemCount > 9 ? "+9" : cartItemCount
                            }}</span
                        >
                        <div>
                            <NuxtLink
                                to="/cart"
                                :class="{ 'btn-circle': cartItemCount > 0 }"
                                class="btn p-2"
                            >
                                <Icon name="uil:shopping-bag" size="20" />
                            </NuxtLink>
                        </div>
                    </div>
                    <AvatarDropdown v-if="authStore.token && authStore.user" />
                    <template v-else>
                        <button  onclick="modal_login.showModal()" class="btn btn-primary">Se connecter</button>
                    </template>
                </div>
            </div>
        </div>
        <CategorieListInline class="hidden md:flex lg:flex xl:flex" />
    </div>
    <ModalAuth />
</template>

<script lang="ts" setup>
const cartStore = useMyCartStoreStore();
const authStore = useMyAuthStoreStore();

const cartItemCount = computed(() => {
    return cartStore.cartStore.length;
});

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

<style lang="scss" scoped>
.search-input {
    outline: none;
    border: none;
}

.search-input:focus {
    outline: none;
}
</style>
