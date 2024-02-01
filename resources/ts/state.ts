import {defineStore} from 'pinia'

export const state = defineStore('Store', {
    state: () => ({
        login: false,
    }),
    actions: {
        setLogin() {
            this.login = true
        },
        setLogout() {
            this.login = false
        }
    },
    persist: true,
})
