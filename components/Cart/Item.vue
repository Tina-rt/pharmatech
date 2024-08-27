<template>
    <div class="cart-item flex justify-center lg:justify-between md:justify-between xl:justify-between items-center w-full gap-5 flex-wrap">
        <div class="flex gap-5 justify-between items-center">
            <div class="cart-item-image">
                <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div class="cart-item-details w-full">
                <h2 class="product-name">Product Name</h2>
                <p class="text-green in-stock">En Stock</p>
                <button>Remove</button>
            </div>
        </div>
        <div class="quantity h-full flex items-center">
            <InputNumber class="" />
        </div>
        <div class="total font-bold min-w-40 lg:min-w-fit xl:min-w-fit md:min-w-fit">Ar1290000.00</div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.cart-item{
  border-bottom: 1px solid rgba(0, 0, 0, 0.451);
  padding: 1rem 0;
}
.total{
  font-size: 1.2rem;
}
</style>
