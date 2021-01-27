<template>
  <div>
    <div class="text-span">
      <span> Harry Potter Series </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="seriesList in seriesList" :key="seriesList.id">
        <div class="ms-2 movie_card">
          <img :src="'http://image.tmdb.org/t/p/w500/' +    seriesList.poster_path" width='100px' class="card-img-top" alt="..." />
          <!-- <h3 class="title text-white">{{ seriesList.original_title }}</h3> -->
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
      seriesList: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1"
      )
      .then((response) => {
        console.log("seriesList", response);
        this.seriesList = response.data.results;
      });
  },
};
</script>
   