import { createRouter, createWebHistory } from "vue-router"
import Group from './vue/Group.vue'
import Board from './vue/Board.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        /*
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        */
        {
            name: 'group',
            path: '/',
            component: Group,
        },
        {
            name: 'board',
            path: '/board/:boardid',
            component: Board,
            props: true
        },
    ]
})

export default router;
