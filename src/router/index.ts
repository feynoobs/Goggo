import { createRouter, createWebHashHistory } from 'vue-router'
import JaView from '../components/JaView.vue'
import EnView from '../components/EnView.vue'
import ZhView from '../components/ZhView.vue'
import KoView from '../components/KoView.vue'

const routes = [
    {
        path: '/',
        name: 'ja',
        component: JaView,
    },
    {
        path: '/en',
        name: 'EnView',
        component: EnView,
    },
    {
        path: '/zh',
        name: 'zh',
        component: ZhView,
    },
    {
        path: '/ko',
        name: 'ko',
        component: KoView,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
