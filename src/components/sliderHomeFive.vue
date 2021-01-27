<template>
  <div>
    <div class="text-span">
      <span> Harry Potter Series </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="harrylist in harrylist" :key="harrylist.imdbID">
        <div class="ms-2 movie_card">
          <img :src="harrylist.Poster" class="card-img-top" alt="..." />
          <h3 class="title text-white">{{ harrylist.Title }}</h3>
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
      harrylist: [],
    };
  },
  created() {
    axios
      .get("http://www.omdbapi.com/?apiKey=38657152&s=harry potter")
      .then((response) => {
        console.log("movie", response);
        this.harrylist = response.data.Search;
      });
  },
};
</script>
   