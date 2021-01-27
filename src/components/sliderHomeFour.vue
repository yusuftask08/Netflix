<template>
  <div>
    <div class="text-span">
      <span> Testere - Saw Series </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="sawlist in sawlist" :key="sawlist.imdbID">
        <div class="ms-2 movie_card">
          <img :src="sawlist.Poster" class="card-img-top" alt="..." />
          <h3 class="title text-white">{{ sawlist.Title }}</h3>
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
      sawlist: [],
    };
  },
  created() {
    axios
      .get("http://www.omdbapi.com/?apiKey=38657152&s=saw")
      .then((response) => {
        console.log("movie", response);
        this.sawlist = response.data.Search;
      });
  },
};
</script>
   