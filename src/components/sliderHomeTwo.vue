<template>
  <div>
    <div class="text-span">
      <span> X-men Series </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="xmenlist in xmenlist" :key="xmenlist.imdbID">
        <div class="ms-2 movie_card">
          <img :src="xmenlist.Poster" class="card-img-top" alt="..." />
          <h3 class="title text-white">{{ xmenlist.Title }}</h3>
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
      xmenlist: [],
    };
  },
  created() {
    axios
      .get("http://www.omdbapi.com/?apiKey=38657152&s=x-men")
      .then((response) => {
        console.log("movie", response);
        this.xmenlist = response.data.Search;
      });
  },
};
</script>