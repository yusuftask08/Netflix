<template >
  <div class="container-card">
    <div class="">
      <div class="ms-2 me-2 movie_card item">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="card-img-top"
          alt="..."
        />

        <div class="film_info" v-if="isAuthenticated">
          <div class="list-icon-left">
            <a
              ><i class="fas fa-play" style="background: white; color: black">
              </i
            ></a>

            <a @click="addFavorite(movie)"
              ><i class="fas fa-plus toolTip">
                <span class="toolTiptext-sm tool-span-sm"> Listeme ekle </span>
              </i></a
            >
            <a @click="showDetail(movie)">
              <i class="fas fa-chevron-down toolTip">
                <span class="toolTiptext-sm tool-span-sm">
                  Daha fazla bilgi
                </span>
              </i>
            </a>
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
  </div>
</template>
<script>
import axios from "axios";
import modals from "@/components/modal/modals";
import { mapGetters } from 'vuex';

export default {
  components: { modals },

  props: {
    movie: {
      type: Object,
      required: true,
      isOpen: false,
    },
  },
  data() {
    return {
      isOpen: false,
      modalData: [],
      modalId: [],
      videoId: [],
      showLoading: true,
    };
  },
  methods: {
    addFavorite(movie) {
      axios
        .post("http://localhost:3000/favorites", {
          ...movie,
          isFavorite: true,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    },
    async showDetail(movie) {
      this.showLoading = true;
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=<//APIKEY\\>&language=en-US&append_to_response=videos,credits,release_dates,similar`
          )
          .then((response) => {
            console.log("iddetailvideos", response);
            this.modalId = response.data;
            this.modalData = movie;
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
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "users/isAuthenticated",
    }),
  },
};
</script>