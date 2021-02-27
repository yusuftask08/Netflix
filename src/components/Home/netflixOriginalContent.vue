<template>
  <div class="netflix-original-icerik">
    <div class="text-span" style="margin-left: 61px">
      <span> Netlix Orijinal İçerikleri </span>
    </div>
    <swiper
      :slides-per-view="4"
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
      class="item swiper-scrollbar-lock"
      style="height: auto !important"
    >
      <swiper-slide v-for="gundem in gundemList" :key="gundem.id">
        <div class="container-card-original ms-5">
          <div class="imdb">
            <div class="ms-3 originalCard">
              <img
                :src="'http://image.tmdb.org/t/p/w500/' + gundem.poster_path"
                class="card-img-top"
                alt="..."
              />

              <div class="film_info_original_card"  v-if="isAuthenticated">
                <div class="list-icon-left_original">
                  <i
                    class="fas fa-play right"
                    style="background: white; color: black"
                  >
                  </i>
                  <i class="fas fa-plus toolTip right-2" @click="addFavorite(gundem)">
                    <span class="toolTiptext tool-span"> Listeme ekle </span>
                  </i>
                  <a @click="showDetail(gundem)">
                    <i class="fas fa-chevron-down toolTip">
                      <span class="toolTiptext tool-span">
                        Daha fazla bilgi
                      </span>
                    </i></a
                  >
                </div>
              </div>
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
import { Modal } from "vue-neat-modal";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import { mapGetters } from 'vuex';
export default {
  components: {
    modals,
    Modal,
    Swiper,
    SwiperSlide,
    Navigation,
  },
  data() {
    return {
      gundemList: [],
      isOpen: false,
      modalData:[],
      modalId: [],
      videoId: [],
      showLoading: true,
    };
  },
  methods: {
     addFavorite(gundem) {
      axios
        .post("http://localhost:3000/favorites", {
          ...gundem,
          isFavorite: true,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    },
    async showDetail(gundem) {
      console.log("isOpenACILIYORMU :>> ", this.isOpen);
      this.showLoading = true;
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${gundem.id}?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&append_to_response=videos,credits,release_dates,similar`
          )
          .then((response) => {
            console.log("iddetailvideos", response);
            this.modalId = response.data;
            this.modalData = gundem;
          });

        console.log("gundem", gundem);
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
        "https://api.themoviedb.org/3/movie/popular?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1&append_to_response=videos,images"
      )
      .then((response) => {
        console.log("gundemListOriginalContent", response);
        this.gundemList = response.data.results;
      });
  },
   computed: {
    ...mapGetters({
      isAuthenticated: "users/isAuthenticated",
    }),
  },
};
</script>
   