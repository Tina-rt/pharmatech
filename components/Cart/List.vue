<template>
    <div class="lg:grid md:grid xl:grid main-cart">
        <div class="cart-list py-4 px-3 flex flex-col gap-4">
            <CartItem v-for="product in cartList"/>
        </div>
       <CartBill class="sticky top-[148px]"/>
    </div>
</template>

<script lang="ts" setup>

const cartList = ref([{
	id: 1,
	name: "Produit 1",
	price: 100,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 2,
	name: "Produit 2",
	price: 200,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: false
},
{
	id: 3,
	name: "Produit 3",
	price: 300,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 4,
	name: "Produit 4",
	price: 400,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 5,
	name: "Produit 5",
	price: 500,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 6,
	name: "Produit 6",
	price: 600,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 7,
	name: "Produit 7",
	price: 700,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 8,
	name: "Produit 8",
	price: 800,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 9,
	name: "Produit 9",
	price: 900,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
},
{
	id: 10,
	name: "Produit 10",
	price: 1000,
	quantity: 1,
	image: "https://via.placeholder.com/150",
	inStock: true
}])

</script>

<style scoped lang="scss" >
.main-cart {
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
}

.in-stock {
    font-size: 0.8rem;
}
</style>
