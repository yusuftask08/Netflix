<template>
  <div class="text-span">
    <span> Netlix Orijinal İçerikleri </span>
  </div>

  <div class="container-card-original ms-5">
    <div class="imdb" v-for="gundem in gundemList" :key="gundem.id">
      <div class="ms-3 originalCard">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + gundem.poster_path"
          class="card-img-top"
          alt="..."
        />
        <div class="film_info_original_card">
          <div class="list-icon-left_original">
            <i
              class="fas fa-play right"
              style="background: white; color: black"
            >
            </i>
            <i class="fas fa-plus toolTip right-2">
              <span class="toolTiptext tool-span"> Listeme ekle </span>
            </i>
            <a @click="showDetail(gundem)">
              <i class="fas fa-chevron-down toolTip">
                <span class="toolTiptext tool-span"> Daha fazla bilgi </span>
              </i></a
            >
            <h3 class="title text-white">{{ gundem.original_title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modals :modalData="modalData" :modalId="modalId" v-model="isOpen" />
</template>

<script>
import axios from "axios";
import modals from "@/components/modal/modals";
import { Modal } from "vue-neat-modal";

export default {
  components: {
    modals,
    Modal,
  },
  data() {
    return {
      gundemList: [],
      isOpen: false,
      modalData: null,
      modalId: [],
    };
  },
  methods: {
    async showDetail(gundem) {
      console.log("gundem", gundem);
      this.isOpen = true;
      this.modalData = gundem;

      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${gundem.id}?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&append_to_response=videos,credits,release_dates,similar`
        )
        .then((response) => {
          console.log("iddetailvideos", response);
          this.modalId = response.data;
        });
      // await axios
      //   .get(
      //       "https://www.googleapis.com/youtube/v3/watch?part=snippet&key=AIzaSyBuYE0tFSCEddNAZ5Mnjy_GTyjqvxFjidgq=sfM7_JLk-84&type=video&maxResults=1"
      //   )
      //   .then((response) => {
      //     console.log("youtubeistegiatıldı", response);
      //   });
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
};
</script>
   