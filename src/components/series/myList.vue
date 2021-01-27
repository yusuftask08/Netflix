<template>
  <template>
    <div>
      <div class="text-span">
        <span> Listem </span>
      </div>
      <div class="container-card">
        <div
          class="imdb"
          v-for="list in list"
          :key="list.imdbID"
        >
          <div class="ms-2 movie_card">
            <img :src="list.Poster" class="card-img-top" alt="..." />
            <h3 class="title text-white">{{ list.Title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios
      .get("http://www.omdbapi.com/?apiKey=38657152&s=harry potter")
      .then((response) => {
        console.log("list", response);
        this.list = response.data.Search;
      });
  },
};
</script>
   
