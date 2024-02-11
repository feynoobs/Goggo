import { createRouter, createWebHistory } from "vue-router"
import Login from './vue/Login.vue'
import Bbss from './vue/Bbss.vue'
import Threads from './vue/Threads.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'bbss',
            path: '/',
            component: Bbss,
        },
        {
            name: 'threads',
            path: '/threads/:boardid',
            component: Threads,
            props: true
        }
    ]
})

export default router;
