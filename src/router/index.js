import {
    createRouter,
    createWebHistory
} from 'vue-router'
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
            import( /* webpackChunkName: "about" */ '@/views/MyList.vue')
    },
    {
        path: '/Movies',
        name: 'Movies',

        component: () =>
            import( /* webpackChunkName: "about" */ '@/views/Movies.vue')
    },
    {
        path: '/NewAndPopular',
        name: 'NewAndPopular',

        component: () =>
            import( /* webpackChunkName: "about" */ '@/views/NewAndPopular.vue')
    },
    {
        path: '/Series',
        name: 'Series',

        component: () =>
            import( /* webpackChunkName: "about" */ '@/views/Series.vue')
    }, {
        path: '/Search',
        name: 'Search',

        component: () =>
            import( /* webpackChunkName: "about" */ '@/views/Search.vue')
    },
    {
        path: '/Login',
        name: 'Login',

        component: () =>
            import( /* webpackChunkName: "about" */ '@/views/Login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router