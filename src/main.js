import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style.css"
// GLOBAL Component Registration
import modals from "@/components/modal/modals";
import miniModalDetail from "@/components/modal/miniModalDetail";
import 'vue-neat-modal/dist/vue-neat-modal.css'
import {
    Modal
} from 'vue-neat-modal'
import Vue from 'vue'
import YouTube from 'vue3-youtube'


const app = createApp(App);
app.use(store);
app.use(router);
app.component("modals", modals);
app.component('YouTube', YouTube)
app.component("miniModalDetail", miniModalDetail);
app.component('AppModal', Modal);
app.mount("#app");