import { createRouter, createWebHistory } from "vue-router"
import Login from './vue/Login.vue'
import Dashboard from './vue/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'dashboard',
            path: '/',
            component: Dashboard,
        }
    ]
})

export default router;
