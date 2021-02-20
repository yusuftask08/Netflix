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



import VueYouTubeIframe from '@techassi/vue-youtube-iframe';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueYouTubeIframe);
app.component("modals", modals);
app.component("miniModalDetail", miniModalDetail);
app.component('AppModal', Modal);
app.mount("#app");