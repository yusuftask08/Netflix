<template>
  <div style="height: 450px; overflow-x: scroll; overflow-y: hidden " >
    <div class="text-span">
      <span> Outside the Wire Adlı Yapımı İzleyenlere Öneriler    </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="topTenList in topTenList" :key="topTenList.id">
        <div class="ms-3 movie_card">
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + topTenList.poster_path"
            width="100px"
            class="card-img-top"
            alt="..."
          />
          <!-- <h3 class="title text-white">{{ seriesList.original_title }}</h3> -->
          <p class="text-white">{{ topTenList.vote_count }}</p>
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
      topTenList: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/38700/similar?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1"
      )
      .then((response) => {
        console.log("topTenList", response);
        this.topTenList = response.data.results;
      });
  },
};
</script>
   