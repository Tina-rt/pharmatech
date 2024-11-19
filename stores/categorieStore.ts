import { defineStore } from "pinia";
import type { Category } from "~/types/category.model";

export const useMyCategorieStoreStore = defineStore({
    id: "myCategorieStoreStore",
    state: () => {
        return {
            categorieList: [] as Category[],
        };
    },
    actions: {
        async initStore() {
            try{

                const { data } = await $api("categorie");
                this.categorieList = data;
            }catch(e){
                this.categorieList = [];
                console.log("error");
            }
        },

        getCatById(id: number) {
            return this.categorieList.find((cat) => cat.id === id);
        },
    },
});
