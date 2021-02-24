<template>
  <div class="narcos-onerilen">
    <div class="text-span">
      <span> Narcos Adlı Diziyi İzleyenlere Önerilenler </span>
    </div>

    <swiper
      :slides-per-view="7"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :mousewheel-control="false"
      :performance-mode="false"
      :pagination-visible="true"
      :pagination-clickable="false"
      navigation
      class="item ms-5"
    >
      <swiper-slide v-for="seriesList in seriesList" :key="seriesList.id">
        <div class="ms-2 me-2 movie_card item">
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + seriesList.poster_path"
            class="card-img-top"
            alt="..."
          />
          <div class="film_info">
            <div class="list-icon-left">
              <i class="fas fa-play" style="background: white; color: black">
              </i>
              <i class="fas fa-plus toolTip">
                <span class="toolTiptext-sm tool-span-sm"> Listeme ekle </span>
              </i>
              <i class="fas fa-chevron-down toolTip">
                <span class="toolTiptext-sm tool-span-sm">
                  Daha fazla bilgi
                </span>
              </i>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import axios from "axios";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
  },
  data() {
    return {
      seriesList: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/63351/recommendations?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1"
      )
      .then((response) => {
        console.log("", response);
        this.seriesList = response.data.results;
      });
  },

  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>