<template>
  <div class="container">
    <div class="contanier-text">
      <div class="icerik contanier-text-title text-white">
        <div v-show="icerik" class="inline" style="">
          <div class="text">
            <p v-if="icerik" style="list-style: none; color: grey">
              İlgili İçeriğe göz atın :
            </p>
          </div>

          <div class="ul">
            <ul>
              <li
                style="list-style: none; display: inline"
                v-for="movie in movieList"
                :key="movie.id"
              >
                |
                <a v-if="(icerik = !movie.lenght)" @click="showDetail(movie)">
                  {{ movie.original_title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <modals :modalData="modalData" v-model="isOpen" :videoId="videoId" :modalId="modalId" />
    <div class="row">
      <div
        class="col-6 col-sm-2 my-5"
        v-for="movie in movieList"
        :key="movie.id"
      >
        <movieListItem :movie="movie" />
      </div>
    </div>
  </div>
</template>
<script>
import movieListItem from "@/components/Home/movieListItem";
import modals from "@/components/modal/modals";

import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      icerik: false,
      isOpen: false,
      movie: [],
      modalData: [],
      modalId: [],
      videoId: [],
      showLoading: true,
    };
  },
  components: {
    movieListItem,
    modals,
  },
  methods: {
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

        console.log("movie", movie);
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

  // console.log("movieisimidcek :>> ", movie);
  // this.modalData = movie;
  // this.isOpen = !this.isOpen;

  computed: {
    ...mapGetters({
      movieList: "movieItemList",
    }),
  },
};
</script>
<style>
ul li a {
  margin-right: 3px;

  cursor: pointer;
}
ul li:hover {
  color: red;
}
.text p {
  width: 150px;
}
.inline {
  display: flex;
}
</style>
