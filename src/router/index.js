import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store"

const util = require('util');
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/List',
        name: 'List',

        component: () =>
            import( /* webpackChunkName: "about" */ '@/views/List.vue')
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
    {
        path: '/Register',
        name: 'Register',

        component: () =>
            import( /* webpackChunkName: "about" */ '@/views/Register.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    let user = null;
    const authenticatedPages = ["Home", "Movies", "List", "NewAndPopular", "Series", "Search"];
    // local storage üzerinde user varmı?
    if (localStorage?.user) user = JSON.parse(localStorage?.user)
    // localstorage üzerinde user varsa store u güncelle
    if (user !== null && typeof user === 'object') {
        store.commit("users/setUser", user)
    };
    // is isAuthenticated bilgisini store üzerinden almak
    const isAuthenticated = store.getters["users/isAuthenticated"]
    if (isAuthenticated) store.dispatch("users/setFavorites");


    // rules...
    //eğer giriş yapmamışsa ve user ile ilgili bölümlere sokma login sayfasına yönlendir
    if (!isAuthenticated && authenticatedPages.indexOf(to.name) > -1) next({
        name: "Login"
    });
    if (isAuthenticated && (to.name === "Login" || to.name === "Register"))
        next({
            name: "Home"
        });

    next();



})
export default router