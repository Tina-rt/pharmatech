import { defineStore } from "pinia";

export const useMyAuthStoreStore = defineStore({
    id: "myAuthStoreStore",
    state: () => ({
        token: null as any,
        user: null as any,
    }),
    actions: {
        initStore() {
            const cookie = useCookie('token');
            debugger;
            if (cookie.value && cookie.value.length > 0) {
                this.token = cookie.value;
                return;
            }
            
        },
        login(token: any, user: any) {
            this.token = token;
            this.user = user;
            const cookie = useCookie('token');
            cookie.value = token;
        },
        logout() {
            this.token = null;
            this.user = null;
        },
    },
});
