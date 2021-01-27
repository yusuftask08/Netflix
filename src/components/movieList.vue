<template>
  <div >
    <div>
      <div class="container-card" >
        <div class="imdb ms-5"  v-for="movie in movieList" :key="movie.imdbID">
          <movieListItem :movie="movie"  />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import movieListItem from "@/components/movieListItem";
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: {
    movieListItem,
  },

  computed: {
    ...mapGetters({
      movieList: "movieItemList",
    }),
  },
};
</script>