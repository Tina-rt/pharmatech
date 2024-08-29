<template>
    <div class="px-9">
        <h2 class="form-title">Mode de Paiement</h2>
        <div class="flex flex-col gap-6">
            <div class="flex flex-col">
                <div class="flex items-center gap-2">
                    <input
                        class="radio"
                        type="radio"
                        name="keepaddress"
                        id="address"
                    />
                    <div>
                        <label for="keepaddress" class="font-bold radiolabel"
                            >Carte Crédit</label
                        >
                        <div class="description-text">
                            Nous acceptions tous types de carte crédits
                        </div>
                    </div>
                </div>
                <div class="ml-5 pl-3">
                    <FormCreditCard />
                </div>
            </div>

            <div class="flex items-center gap-2">
                <input
                    class="radio"
                    type="radio"
                    name="keepaddress"
                    id="address"
                />
                <div>
                    <label for="keepaddress" class="radiolabel"
                    >Paiement à la Livraison</label
                >
                <div class="description-text">Payer en Espèces à la livraison</div>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <input
                    class="radio"
                    type="radio"
                    name="keepaddress"
                    id="address"
                />
                <div>
                    <label for="keepaddress" class="radiolabel"
                    >Mobile Money</label
                >
                <div class="description-text">Payer avec Airtel Money, Mvola, Orange Money</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
