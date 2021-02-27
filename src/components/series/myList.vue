<template>
  <div class="container">
    <div class="contanier-text">
      <div class="icerik contanier-text-title text-white">
        <div class="text-span" style="margin-left: 0px; margin-top: 0px">
          <span> Listem </span>
        </div>
        <div class="row">
          <div
            v-for="favori in favoriteList"
            :key="favori.id"
            class="ms-2 me-2 movie_card"
          >
            <img
              :src="'http://image.tmdb.org/t/p/w500/' + favori.poster_path"
              class="card-img-top"
              alt="..."
            />
            <div class="film_info">
              <div class="list-icon-left">
                <a
                  ><i
                    class="fas fa-play"
                    style="background: white; color: black"
                  >
                  </i
                ></a>

                <a @click="deleteItem(favori)"
                  ><i class="fas fa-check toolTip">
                    <span
                      class="toolTiptext-sm tool-span-sm"
                      style="width: 100px; left: 25% !important"
                    >
                      Listemden Çıkar
                    </span>
                  </i></a
                >
                <a @click="showDetail(favori)">
                  <i class="fas fa-chevron-down toolTip">
                    <span class="toolTiptext-sm tool-span-sm">
                      Daha fazla bilgi
                    </span>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

export default {
  components: { modals },
  data() {
    return {
      favoriteList: [],
      isOpen: false,
      modalData: [],
      modalId: [],
      videoId: [],
      showLoading: true,
    };
  },
  methods: {
    async showDetail(favori) {
      this.showLoading = true;
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${favori.id}?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&append_to_response=videos,credits,release_dates,similar`
          )
          .then((response) => {
            console.log("iddetailvideos", response);
            this.modalId = response.data;
            this.modalData = favori;
          });

        console.log("modalDatas", this.modalData);
        this.isOpen = true;

        this.videoId = this.modalId.videos.results;
        console.log("this.videoId :>> ", this.videoId);
      } catch (error) {
        console.error(error);
      } finally {
        this.showLoading = false;
      }
    },
    deleteItem(favori) {
      axios
        .delete(`http://localhost:3000/favorites/${favori.id}`)
        .then((delete_response) => {
          console.log("Delete Response", delete_response);
          this.favoriteList = this.favoriteList.filter(
            (i) => i.id != favori.id
          );
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    axios.get("http://localhost:3000/favorites").then((requests) => {
      console.log("favorilistesiçekildi", requests);
      this.favoriteList = requests.data;
    });
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
