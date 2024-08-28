<template>
    <div class="px-5 h-full flex-1">
        <h1 class="subtitle">Mes commandes</h1>
        <div class="order-table flex flex-col gap-4 py-5">
            <OrderItem v-for="order in orders" :order="order"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { orders } from '~/mock/orders.mock';

</script>

<style></style>
