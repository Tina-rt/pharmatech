<template>
    <div>
        <dialog id="modal_login" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box w-10/12 p-8">
                <div class="flex w-full justify-between">
                    <h3 class="text-xl font-bold">Se connecter</h3>
                    <form method="dialog">
                        <button
                            class="btn btn-sm btn-square btn-ghost "
                            aria-label="Close"
                        >
                            <Icon name="mdi-close" />
                        </button>
                    </form>
                </div>
                <FormLogin @signup="isLogin = false" v-if="isLogin"/>
                <FormCreateAccount @login="isLogin = true" v-else/>
               
            </div>
        </dialog>
    </div>
</template>

<script lang="ts" setup>

const isLogin = ref(true);

</script>

<style></style>
