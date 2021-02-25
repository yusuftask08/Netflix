<template>
  <div class="listem-container">
    <div class="text-span">
      <span> Listem</span>
    </div>
    <div class="div" style="color: #fff">
      <pre>
 
      {{ favoriteList() }}
    </pre
      >
    </div>
    <!-- <swiper
      :slides-per-view="7"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :mousewheel-control="false"
      :performance-mode="false"
      :pagination-visible="true"
      :pagination-clickable="false"
      navigation
      class="item ms-5"
    >
      <swiper-slide>
        <div class="ms-2 me-2 movie_card item" style="width: 11rem !important">
          <img
            src="'http://image.tmdb.org/t/p/w500/' + "
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
    </swiper> -->
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import { mapGetters } from 'vuex';

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

  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    ...mapGetters({
      favoriteList: "users/favoriteList",
    }),
  },

};
</script>
<style>
.listem-container {
  top: -200px;
}
.swiper-container {
  top: 0 !important;
}
.text-span {
  margin-bottom: 0px !important;
}
</style>
