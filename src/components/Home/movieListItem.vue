<template >
  <div class="container-card">
    <div class="">
      <div class="ms-2 me-2 movie_card item">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="card-img-top"
          alt="..."
        />
        <div class="film_info">
          <div class="list-icon-left">
            <a
              ><i class="fas fa-play" style="background: white; color: black">
              </i
            ></a>

            <a
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
      <modals :modalData="modalData" v-model="isOpen" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import modals from "@/components/modal/modals";

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
    };
  },
  methods: {
    showDetail(movie) {
      console.log("movieidcek  ", movie);
      this.modalData = movie;
      this.isOpen = !this.isOpen;
    },
  },
  // methods: {
  //   showDetail(id) {
  //     console.log("movies", id);
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${id}?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US`
  //       )
  //       .then((response) => {
  //         console.log("istekat", response);
  //         this.movies = response.data.results;
  //       });
  //   },
  // },
};
</script>