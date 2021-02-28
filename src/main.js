import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style.css"
// GLOBAL Component Registration
import modals from "@/components/modal/modals";
import navBar from "@/components/Home/navBar";

import 'vue-neat-modal/dist/vue-neat-modal.css'
import {
    Modal
} from 'vue-neat-modal'




const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueYouTubeIframe);
app.component("modals", modals);
app.component('AppModal', Modal);
app.component('navBar', navBar);

app.mount("#app");