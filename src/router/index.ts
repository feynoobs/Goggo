import { createRouter, createWebHashHistory } from 'vue-router'
import JaView from '../components/JaView.vue'
import JaConfirm from '../components/JaConfirm.vue'
import EnView from '../components/EnView.vue'
import EnConfirm from '../components/EnConfirm.vue'
import ZhView from '../components/ZhView.vue'
import ZhConfirm from '../components/ZhConfirm.vue'
import KoView from '../components/KoView.vue'
import KoConfirm from '../components/KoConfirm.vue'

const routes = [
    {
        path: '/',
        name: 'ja',
        component: JaView,
    },
    {
        path: '/confirm',
        name: 'jaconfirm',
        component: JaConfirm,
    },
    {
        path: '/en',
        name: 'en',
        component: EnView,
    },
    {
        path: '/en/confirm',
        name: 'enconfirm',
        component: EnConfirm,
    },
    {
        path: '/zh',
        name: 'zh',
        component: ZhView,
    },
    {
        path: '/zh/confirm',
        name: 'zhconfirm',
        component: ZhConfirm,
    },
    {
        path: '/ko',
        name: 'ko',
        component: KoView,
    },
    {
        path: '/ko/confirm',
        name: 'koconfirm',
        component: KoConfirm,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    switch (to.name) {
        case 'jaconfirm':
            if (from.name === 'ja') {
                next()
            }
            else {
                next('/')
            }
            break;
        default:
            next();
            break;
    }
});

export default router
