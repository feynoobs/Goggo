import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  router  from './router'
import { guard } from './guard'
import App from './vue/App.vue'

guard(router)
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount("#app")
