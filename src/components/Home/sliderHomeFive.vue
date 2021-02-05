<template>
  <div class="scrollbar">
    <div class="text-span">
      <span> Günün Popülerleri </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="dayPopular in dayPopular" :key="dayPopular.id">
        <div class="ms-3 movie_card">
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + dayPopular.poster_path"
            width="100px"
            class="card-img-top"
            alt="..."
          />
          <!-- <h3 class="title text-white">{{ seriesList.original_title }}</h3> -->
          <p class="text-white">{{ dayPopular.vote_count }}</p>
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
      dayPopular: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=7b97ca5600ae944d697e04e778928d05"
      )
      .then((response) => {
        console.log("dayPopular", response);
        this.dayPopular = response.data.results;
      });
  },
};
</script>
   