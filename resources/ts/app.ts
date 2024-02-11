import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from "pinia-plugin-persistedstate"
import  router  from './router'
import { guard } from './guard'
import App from './vue/App.vue'

// guard(router)
const app = createApp(App)
const pinia = createPinia()
pinia.use(createPersistedState())
app.use(router)
app.use(pinia)
app.mount("#app")
