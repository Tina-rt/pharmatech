<template>
    <div class="bill grid grid-rows-3 grid-cols-2 gap-3">
        <label for="">
            <div>Sous Total</div>
            <div>(3 Produits)</div>
        </label>
        <div class="value sous-total">
            {{ $formatCurrency(cartStore.total) }}
        </div>
        <label for="tva">TVA</label>
        <div class="value tva">{{ $formatCurrency(cartStore.tva) }}</div>
        <label for="shipping">Frais de livraison</label>
        <div class="value shipping">{{ $formatCurrency(shipping) }}</div>
        <div class="flex w-full justify-between col-span-2 total-sec">
            <label for="total">Total</label>
            <div class="total">{{ $formatCurrency(cartStore.totalBillWithTva) }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const cartStore = useMyCartStoreStore();

const shipping = computed(() => {
    return 1000;
});
</script>

<style lang="scss" scoped>
.bill {
    padding: 1rem;
    background-color: var(--vert-clair-3);
    height: fit-content;
    border-radius: 12px;
    .value {
        justify-self: end;
        font-weight: bold;
    }
    .total-sec {
        border-top: 1px solid var(--vert-fonce-1);
        padding: 1rem 0;
    }
}
.label {
    align-self: self-start;
}
</style>
