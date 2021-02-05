<template>
  <div class="scrollbar">
    <div class="text-span">
      <span> Yeni Çıkanlar </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="newMovieList in newMovieList" :key="newMovieList.id">
        <div class="ms-3 movie_card">
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + newMovieList.poster_path"
            width="100px"
            class="card-img-top"
            alt="..."
          />
          <!-- <h3 class="title text-white">{{ seriesList.original_title }}</h3> -->
          <p class="text-white">{{ newMovieList.vote_count }}</p>
          <!-- <p class="text-white"> {{ seriesList.overview }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      newMovieList: [],
    };
  },
  created() {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1")
      .then((response) => {
        console.log("newMovieList", response);
        this.newMovieList = response.data.results;
      });
  },
};
</script>
   