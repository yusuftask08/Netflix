<template >
  <div class="text-span">
    <span>Netflix TOP 10</span>
  </div>

  <swiper
  
    :slides-per-view="6"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :mousewheel-control="false"
    :performance-mode="false"
    :pagination-visible="true"
    :pagination-clickable="false"
    :sensitivity="0"
    :multipleActiveThumbs="false"
    :autoScrollOffset="15"
    navigation
    class="item ms-5 me-0"
    style="overflow: unset !important"
  >
    <swiper-slide v-for="seriesList in seriesList" :key="seriesList.id" >
      <div class="wrapper">
        <div class="movie_card topTen" style="overflow: unset !important" >
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + seriesList.poster_path "
            class="card-img-top"
            alt="..."
          />
          <div class="rakam" >1</div>
        <div class="rakam" >1</div> 
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
      n: 1,
    };
  },

//   created() {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/top_rated?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1"
//       )
//       .then((response) => {
//         console.log("netlixTOP", response);
//         this.seriesList = response.data.results;
//       });
//   },

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
<style>
.topTen {
  position: relative;
  display: flex;
  align-items: flex-end;
  transform-style: preserve-3d;
  transform: rotateY(-0.01deg);
}

.rakam {
  font-weight: bold;
  font-size: 150px;
  line-height: 1;
  margin-bottom: -14px;
  color: #a39f9f;
  -webkit-text-stroke: #6b6b6b67;
  text-shadow: 0 0 30px black;
  position: absolute;
  left: -50px;
  margin-right: 50px;
  z-index: 2;
}
</style>