<template>
    <div class="px-5">
        <h1>Paiement</h1>
        <div class="payout-container">
            <div>
                <div class="flex flex-col gap-10">
                    <FormClient ref="formClient" />
                    <FormShipping ref="formShipping" />
                    <FormPayementMode />
                    <div class="p-8 w-full grid place-items-center">
                        <div
                            class="btn btn-primary min-w-[300px]"
                            @click="proceedPayement"
                        >
                            Payer Maintenant
                        </div>
                        <div
                            v-if="errorInForm"
                            class="input-error italic text-sm pt-1"
                        >
                            Des champs sont invalides
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
import { createOrderDb } from "~/utils/api/order.api";
import { validateShippingDb } from "~/utils/api/shipping.api";

const formClient = ref<any>(null);
const formShipping = ref<any>(null);

const router = useRouter();
const cartStore = useMyCartStoreStore();
const promoProduits = produitsMedicaux.slice(5, 8);

const errorInForm = ref(false);

const createFormData = () => {
    const formData = new FormData();
    const formClientData = formClient.value.values;
    for (const key in formClientData) {
        formData.append(key, formClientData[key]);
    }
    if (!formShipping.value.adresseDefault){
        formData.set('adresse', formShipping.value.newAdresse);
    }
    formData.append('date_livraison', formShipping.value.shippingDate);
    formData.append('transporteur', '');

    return formData;
}

const proceedPayement = async () => {
    if (formClient.value) {
        const { valid } = await formClient.value.validate();
        errorInForm.value = !valid;

        if (valid) {
            let currFormData = createFormData();
            // currFormData.append('')
            const res = await createOrderDb();
            console.log(res);
            if (res) {

                currFormData.set('commande_id', res.id);
                
                const data = await validateShippingDb(currFormData);
                console.log(data);
                cartStore.emptyCart({ syncDb: false });
                router.push("/order");
            }
        }
    }
};
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
