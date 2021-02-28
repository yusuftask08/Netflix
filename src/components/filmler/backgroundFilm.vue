<template>
  <div>
    <div class="nextReleasesContainer">
      <div class="videoContainer" style="top: -50px !important">
        <video autoplay muted loop src="@/assets/outside.mp4" ></video>
      </div>

      <div class="containerReleases">
        <h1>OUT SIDE THE WIRE</h1>
        <p style="font-size: 20px !important">
          Yakın gelecekte bir savaş bölgesine gönderilen insansız hava aracı
          pilotu, bir nükleer saldırıyı durdurmak için çok gizli bir android
          subayla iş birliği yapar.
        </p>
        <button id="buttonPlay" @click="showDetail()">
          <i class="fas fa-play"></i>

          <span>Oynat</span>
        </button>
        <button @click="showDetail()" id="buttonInfo">
          <i class="fas fa-info-circle"></i>
          <span> Daha Fazla Bilgi</span>
        </button>
      </div>
    </div>

    <modals
      v-model="isOpen"
      :modalData="modalData"
      :videoId="videoId"
      :modalId="modalId"
    />
  </div>
</template>
<script>
import modals from "@/components/modal/modals.vue";
import axios from "axios";
export default {
  components: { modals },
  data() {
    return {
      isOpen: false,
      modalId: [],
      modalData: [],
      videoId: [],
    };
  },
  methods: {
    async showDetail() {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/775996?api_key=<//APIKEY\\>&language=en-US&append_to_response=videos,credits,release_dates,similar`
          )
          .then((response) => {
            console.log("theplatfrom", response);
            this.modalId = response.data;
            this.modalData = this.modalId;
            console.log("this.modalData :>> ", this.modalData);
          });

        this.isOpen = true;
        this.videoId = this.modalData.videos.results;
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
};
</script>
<style>
.videoContainer:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 55%;
  bottom: 0;
  background: -webkit-linear-gradient(to top, #181818, transparent 50%);
  background: linear-gradient(to top, #181818, transparent 50%);
}
</style>
