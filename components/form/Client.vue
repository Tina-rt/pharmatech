<template>
    <div class="px-9">
        <h2 class="form-title">Information de l'Acheteur</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-4">
            <div class="flex flex-col">
                <label for="name">Nom*</label>
                <TextInput
                    type="text"
                    name="name"
                    id="name"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <label for="firstname">Prénom*</label>
                <TextInput
                    type="text"
                    name="firstname"
                    id="firstname"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <label for="email">Email*</label>
                <TextInput
                    type="email"
                    name="email"
                    id="email"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <label for="email">Téléphone*</label>
                <TextInput
                    type="tel"
                    name="telephone"
                    id="telephone"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <label for="email">Adresse*</label>
                <TextInput
                    type="text"
                    name="adresse"
                    id="adresse"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <label for="prescription">Préscription*</label>
                <FileInput />
            </div>
            <div class="flex flex-col">
                <label for="ville">Ville*</label>
                <input
                    type="text"
                    name="ville"
                    id="ville"
                    class="input input-bordered"
                />
            </div>
            <div class="flex flex-col">
                <label for="codepost">Code Postale*</label>
                <input
                    type="text"
                    name="codepost"
                    id="codepost"
                    class="input input-bordered"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
