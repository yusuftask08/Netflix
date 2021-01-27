import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/MyList',
        name: 'MyList',

        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/MyList.vue')
    },
    {
        path: '/Movies',
        name: 'Movies',

        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/Movies.vue')
    },
    {
        path: '/NewAndPopular',
        name: 'NewAndPopular',

        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/NewAndPopular.vue')
    },
    {
        path: '/Series',
        name: 'Series',

        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/Series.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router