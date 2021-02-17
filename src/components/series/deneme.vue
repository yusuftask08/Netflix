<template>
  <div class="text-span">
    <span> Swiper deneme 2 </span>
  </div>
  <div class="container-card">
    <div class="card">
      <div class="card-img">
        <img
          class="image"
          src="https://occ-0-778-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYVZbqz_uitE0A1OmhKLo3WWuKlxVcPkV9Iaa2jtC-3OBvD1S8h27ov27K2A5e1Gvpt8TYTMPIroq_UtCn28Ho8rIxg.webp?r=eab"
        />
      </div>
    </div>
  </div>

  <swiper
    :slides-per-view="5"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :mousewheel-control="false"
    :performance-mode="false"
    :pagination-visible="true"
    :pagination-clickable="false"
    navigation
    class="ms-5"
  >
    <swiper-slide v-for="seriesList in seriesList" :key="seriesList.id">
      <div class="ms-2 me-2 movie_card item">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + seriesList.poster_path"
          class="card-img-top"
          width="100px"
          alt="..."
        />
        <div class="info">
          <div class="list-icon-left">
            <i class="fas fa-play"></i>
            <i class="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
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
      videos: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=7b97ca5600ae944d697e04e778928d05"
      )
      .then((response) => {
        console.log("deneme2", response);
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
