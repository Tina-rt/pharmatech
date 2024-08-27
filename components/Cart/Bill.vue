<template>
    <div class="bill grid grid-rows-3 grid-cols-2 gap-3 ">
        <label for="">
            <div>Sous Total</div>
            <div>(3 Produits)</div>
        </label>
        <div class="value sous-total">Ar487 000.00</div>
        <label for="tva">TVA</label>
        <div class="value tva">Ar 77990.00</div>
        <label for="shipping">Frais de livraison</label>
        <div class="value shipping">Ar 1000.00</div>
        <div class="flex w-full justify-between col-span-2 total-sec">
            <label for="total">Total</label>
            <div class="total">Ar 565 990.00</div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.bill {
    padding: 1rem;
    background-color: var(--vert-clair-3);
    height: fit-content;
  .value{
    justify-self: end;
    font-weight: bold;
  }
  .total-sec{
    border-top: 1px solid var(--vert-fonce-1);
    padding: 1rem 0;
  }
}
.label{
  align-self: self-start;
}
</style>
