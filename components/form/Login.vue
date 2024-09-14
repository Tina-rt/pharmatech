<template>
    <div class="py-4 flex flex-col gap-4">
        <form action="" class="flex flex-col gap-5">
            <div class="flex flex-col">
                <label for="email">Adresse Email</label>
                <input type="email" name="email" class="input input-bordered" />
            </div>
            <div class="flex flex-col">
                <label for="password">Mot de passe</label>
                <input
                    type="password"
                    name="password"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <button class="btn btn-primary">Se connecter</button>
            </div>
        </form>
        <div class="text-center flex flex-col">
            <NuxtLink>Mot de passe oublié ?</NuxtLink>
            <div>
                Vous n'avez pas de compte ?
                <span class="link text-primary" @click="emits('signup')">S'inscrire ici</span>
            </div>
        </div>
        <div>
            <div class="divider">Ou se connecter avec</div>
            <div class="flex gap-5 w-full justify-center">
                <button class="btn btn-square btn-ghost">
                    <Icon
                        size="50"
                        name="mdi-google"
                        class="text-red-600 font-bold"
                    />
                </button>
                <button class="btn btn-square btn-ghost">
                    <Icon size="50" name="mdi-facebook" class="text-blue-400" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const emits = defineEmits(['login', 'signup']);

</script>

<style></style>
