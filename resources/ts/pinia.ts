import { defineStore } from 'pinia'

export const Pinia = defineStore('Pinia', {
    state: () => ({
        title: '',
    }),
    actions: {
        setTitle(title: String) {
            this.title = title
        }
    },
    persist: true,
})
