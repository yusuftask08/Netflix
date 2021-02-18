<template >
  <div class="container-card">
    <div class="">
      <modals :movie="movie" v-model="isOpen" />
      <div class="ms-2 me-2 movie_card item">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="card-img-top"
          alt="..."
        />
     

        <!-- <h3 class="title text-white">{{ seriesList.original_title }}</h3> -->
        <!-- <p class="text-white">{{ seriesList.vote_count }}</p> -->
        <!-- <p class="text-white">{{ seriesList.overview }}</p> -->
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
            <a @click="isOpen = !isOpen">
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

  data() {
    return {
      isOpen: false,
      movies: [],
    };
  },
};
</script>