import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style.css"

// import {
//     BootstrapVue,
//     BootstrapVueIcons
// } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)



createApp(App).use(store).use(router).mount('#app')