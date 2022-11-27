import { createRouter, createWebHashHistory } from 'vue-router'
import JaView from '../views/JaView.vue'
import EnView from '../views/EnView.vue'
import ZhView from '../views/ZhView.vue'
import KoView from '../views/KoView.vue'

const routes = [
    {
        path: '/',
        name: 'ja',
        component: JaView
    },
    {
        path: '/en',
        name: 'EnView',
        component: EnView
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/zh',
        name: 'zh',
        component: ZhView
    },
    {
        path: '/ko',
        name: 'ko',
        component: KoView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
