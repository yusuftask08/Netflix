<template>
  <div class="text-span">
    <span> Günün Popüler Dizileri </span>
  </div>
  <div class="container-card">
    <div class="" v-for="seriesList in seriesList" :key="seriesList.id">
      <div class="ms-2 me-2 movie_card item">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + seriesList.poster_path"
          width="100px"
          class="card-img-top"
          alt="..."
        />
        <!-- <h3 class="title text-white">{{ seriesList.original_title }}</h3> -->
        <!-- <p class="text-white">{{ seriesList.vote_count }}</p> -->
        <!-- <p class="text-white">{{ seriesList.overview }}</p> -->
        <div class="film_info">
          <div class="list-icon-left">
            <i class="fas fa-play" style="background: white; color: black"> </i>
            <i class="fas fa-plus toolTip">
              <span class="toolTiptext-sm tool-span-sm"> Listeme ekle </span>
            </i>
            <i class="fas fa-chevron-down toolTip">
              <span class="toolTiptext-sm tool-span-sm"> Daha fazla bilgi </span>
            </i>
          </div>
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
        "https://api.themoviedb.org/3/trending/tv/day?api_key=7b97ca5600ae944d697e04e778928d05"
      )
      .then((response) => {
        console.log("seriesList", response);
        this.seriesList = response.data.results;
      });
  },
};
</script>
   