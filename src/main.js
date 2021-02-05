import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style.css"
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";




createApp(App).use(store).use(router).mount('#app')