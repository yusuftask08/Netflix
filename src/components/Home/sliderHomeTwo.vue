<template>
  <div class="out-izleyen-oneri">
    <div class="text-span">
      <span> Outside the Wire Adlı Yapımı İzleyenlere Öneriler </span>
    </div>
    <swiper
      :slides-per-view="7"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :mousewheel-control="false"
      :performance-mode="false"
      :pagination-visible="true"
      :pagination-clickable="false"
      :autoScrollOffset="0"
      :draggable="false"
      :mousewheel="false"
      navigation
      class="item swiper-scrollbar-lock ms-5"
    >
      <swiper-slide
        v-for="OutOnerilenler in OutOnerilenler"
        :key="OutOnerilenler.id"
      >
        <div class="ms-2 me-2 movie_card item">
          <img
            :src="
              'http://image.tmdb.org/t/p/w500/' + OutOnerilenler.poster_path
            "
            class="card-img-top"
            alt="..."
          />

          <div class="film_info" v-if="isAuthenticated">
            <div class="list-icon-left">
              <a
                ><i class="fas fa-play" style="background: white; color: black">
                </i
              ></a>

              <a @click="addFavorite(OutOnerilenler)"
                ><i class="fas fa-plus toolTip">
                  <span class="toolTiptext-sm tool-span-sm">
                    Listeme ekle
                  </span>
                </i></a
              >
              <a @click="showDetail(OutOnerilenler)">
                <i class="fas fa-chevron-down toolTip">
                  <span class="toolTiptext-sm tool-span-sm">
                    Daha fazla bilgi
                  </span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <modals
      :modalData="modalData"
      :modalId="modalId"
      :videoId="videoId"
      v-model="isOpen"
    />
  </div>
</template>

<script>
import axios from "axios";
import modals from "@/components/modal/modals";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import { mapGetters } from "vuex";
export default {
  components: {
    modals,
    Swiper,
    SwiperSlide,
    Navigation,
  },
  data() {
    return {
      OutOnerilenler: [],
      isOpen: false,
      modalData: [],
      modalId: [],
      videoId: [],
      showLoading: true,
    };
  },
  methods: {
    addFavorite(OutOnerilenler) {
      axios
        .post("http://localhost:3000/favorites", {
          ...OutOnerilenler,
          isFavorite: true,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    },
    async showDetail(OutOnerilenler) {
      console.log("isOpenACILIYORMU :>> ", this.isOpen);
      this.showLoading = true;
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${OutOnerilenler.id}?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&append_to_response=videos,credits,release_dates,similar`
          )
          .then((response) => {
            console.log("iddetailvideos", response);
            this.modalId = response.data;
            this.modalData = OutOnerilenler;
          });

        console.log("netflixTePop", OutOnerilenler);
        this.isOpen = true;

        this.videoId = this.modalId.videos.results;
        console.log("this.videoId :>> ", this.videoId);
      } catch (error) {
        console.error(error);
      } finally {
        this.showLoading = false;
      }
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/38700/similar?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1"
      )
      .then((response) => {
        console.log("topTenList", response);
        this.OutOnerilenler = response.data.results;
      });
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "users/isAuthenticated",
    }),
  },
};
</script>
   
