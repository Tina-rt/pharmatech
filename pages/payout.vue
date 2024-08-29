<template>
    <div class="px-5">
        <h1>Paiement</h1>
        <div class="payout-container">
            <div>
                <div class="flex flex-col gap-10">
                    <FormClient />
                    <FormShipping />
                    <PayementMode />
                    <div class="p-8 w-full grid place-items-center">
                        <div class="btn btn-primary min-w-[300px]">
                            Payer Maintenant
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CartBill />
                <div class="promo-list">
                    <CardPromoProduits
                        :produits="produit"
                        class="promo-produits"
                        v-for="(produit, index) in promoProduits.slice(0, 3)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { produitsMedicaux } from "~/mock/produits.mock";
const promoProduits = produitsMedicaux.slice(5, 8);
</script>

<style scoped lang="scss">
.payout-container {
    display: grid;
    grid-template-columns: 1fr 30rem;

    @media screen and (max-width: 786px) {
        grid-template-columns: 1fr;
    }
}
.promo-list {
    display: flex;
    flex-direction: column;
    margin-block: 2rem;
    gap: 1rem;
}
</style>
