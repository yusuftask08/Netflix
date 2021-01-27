<template>
  <div>
    <div class="text-span">
      <span> Rocky Balboa Series </span>
    </div>
    <div class="container-card">
      <div class="imdb" v-for="rockylist in rockylist" :key="rockylist.imdbID">
        <div class="ms-2 movie_card">
          <img :src="rockylist.Poster" class="card-img-top" alt="..." />
          <h3 class="title text-white">{{ rockylist.Title }}</h3>
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
      rockylist: [],
    };
  },
  created() {
    axios
      .get("http://www.omdbapi.com/?apiKey=38657152&s=rocky")
      .then((response) => {
        console.log("movie", response);
        this.rockylist = response.data.Search;
      });
  },
};
</script>
   