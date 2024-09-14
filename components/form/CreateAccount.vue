<template>
    <div class="py-4 flex flex-col gap-4">
        <form action="" class="flex flex-col gap-5">
            <div class="flex flex-col">
                <label for="name">Nom</label>
                <input type="email" name="name" class="input input-bordered" />
            </div>
            <div class="flex flex-col">
                <label for="firstname">Prenom</label>
                <input
                    type="email"
                    name="firstname"
                    class="input input-bordered"
                />
            </div>

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
                <label for="confirmPassword"
                    >Confirmer votre mot de passe</label
                >
                <input
                    type="password"
                    name="confirmPassword"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <label for="tel">Téléphone</label>
                <div class="relative">
                    <div
                        class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
                    >
                        <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 19 18"
                        >
                            <path
                                d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="tel"
                        id="phone-input"
                        aria-describedby="helper-text-explanation"
                        class="input input-bordered text-gray-900  rounded-lg   block w-full ps-10 p-2.5  "
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="03X-12-345-67"
                        required
                    />
                </div>
            </div>
            <div class="flex flex-col">
                <button class="btn btn-primary">S'inscrire</button>
            </div>
        </form>

        <div>
            <div class="divider">Vous avez déjà un compte ?</div>
            <div class="flex gap-5 w-full justify-center">
                <button class="btn btn-secondary w-full" @click="emits('login')">Se connecter</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const emits = defineEmits(['login', 'signup']);

</script>

<style></style>
