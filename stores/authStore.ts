import { defineStore } from 'pinia'

export const useMyAuthStoreStore = defineStore({
  id: 'myAuthStoreStore',
  state: () => ({ 
    token: null,
    user: null,
  }),
  actions: {
    login(token: any, user: any) {
      this.token = token
      this.user = user
    },
    logout() {
      this.token = null
      this.user = null
    }
  }
})
