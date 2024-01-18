import { createRouter, createWebHistory } from "vue-router";
import Home from './vue/Login.vue'
import Dashboard from './vue/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/login',
            component: Home,
        },
        {
            name: 'dashboard',
            path: '/',
            component: Dashboard,
        }
    ]
})

export default router
